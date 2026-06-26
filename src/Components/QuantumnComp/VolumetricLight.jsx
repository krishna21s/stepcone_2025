import React, { useMemo } from 'react';
import * as THREE from 'three';

export default function VolumetricLight({
  height = 4,
  radiusTop = 0.1,
  radiusBottom = 2,
  active = false,
}) {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uColor: { value: new THREE.Color('#ffec9b') },
        uIntensity: { value: active ? 1.0 : 0.4 },
      },
      vertexShader: `
        varying float vY;
        void main() {
          vY = position.y;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uIntensity;
        varying float vY;
        void main() {
          float alpha = smoothstep(0.0, 1.0, -vY);
          alpha *= uIntensity;
          alpha *= 0.85;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
    });
  }, [active]);

  return (
    <mesh position={[0, -0.2, 0]} rotation={[Math.PI, 0, 0]}>
      <coneGeometry args={[radiusBottom, height, 40, 1, true]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}