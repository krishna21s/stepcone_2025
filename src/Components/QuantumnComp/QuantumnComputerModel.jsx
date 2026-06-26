import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GoldMaterial, DarkMetalMaterial, NeonMaterial } from './materials';

/**
 * Props:
 *  mobile: boolean (layout)
 *  intensityFactor: number (optional – can blend with lamp)
 */
export default function QuantumComputerModel({ mobile, intensityFactor = 1 }) {
  const group = useRef();
  // Load your GLB – ensure path exists in /public/assets/
  const { scene } = useGLTF('/assets/quantum_computer.glb');

  // Pre-create variant materials (avoid cloning each frame)
  const mats = useMemo(() => {
    return {
      gold: GoldMaterial.clone(),
      dark: DarkMetalMaterial.clone(),
      neon: NeonMaterial.clone(),
      innerGlow: new THREE.MeshStandardMaterial({
        color: '#ffd874',
        emissive: '#ffcf5c',
        emissiveIntensity: 2,
        metalness: 0.2,
        roughness: 0.4,
        transparent: true,
        opacity: 0.95
      })
    };
  }, []);

  useEffect(() => {
    scene.traverse(obj => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        obj.material.side = THREE.FrontSide;

        const name = (obj.name || '').toLowerCase();

        // Simple heuristics mapping – adapt these to actual mesh names after inspecting the console
        if (name.includes('ring') || name.includes('coil')) {
          obj.material = mats.neon;
        } else if (name.includes('gold') || name.includes('panel') || name.includes('casing')) {
          obj.material = mats.gold;
        } else if (name.includes('core') || name.includes('inner')) {
          obj.material = mats.innerGlow;
        } else if (name.includes('wire') || name.includes('cable')) {
          obj.material = mats.gold;
        } else {
          // default dark
          obj.material = mats.dark;
        }
      }
    });
  }, [scene, mats]);

  // Pulsing emissive for neon parts
  useEffect(() => {
    let frameId;
    const animate = (t) => {
      scene.traverse(obj => {
        if (obj.isMesh && obj.material === mats.neon) {
          obj.material.emissiveIntensity = 0.8 + Math.sin(t * 0.0015) * 0.6 * intensityFactor;
        }
        if (obj.isMesh && obj.material === mats.innerGlow) {
          obj.material.emissiveIntensity = 1.6 + Math.sin(t * 0.0012) * 0.8 * intensityFactor;
        }
      });
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [scene, mats, intensityFactor]);

  return (
    <group
      ref={group}
      position={mobile ? [0, -0.8, 0] : [-1.6, -0.2, 0]}
      rotation={[0, Math.PI / 8, 0]}
      scale={mobile ? 0.85 : 1}
    >
      <primitive object={scene} />
    </group>
  );
}

// Preload (optional)
useGLTF.preload('/assets/quantum_computer.glb');