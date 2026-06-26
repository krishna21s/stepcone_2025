/**
 * OPTIONAL: If you prefer pure Three.js (no react-three-fiber), here is a skeleton you can adapt.
 * Put inside a useEffect in a React component and append renderer.domElement to a container.
 * This is only a scaffold; the react-three-fiber version above is more ergonomic.
 */
import * as THREE from 'three';

export function initPlainThree(container) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#050505');

  const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0.8, 2.2, 7);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  const ambient = new THREE.AmbientLight('#ffffff', 0.25);
  scene.add(ambient);

  const goldMat = new THREE.MeshPhysicalMaterial({ color:'#d4af37', metalness:1, roughness:0.2 });

  const comp = new THREE.Mesh(new THREE.CylinderGeometry(1,1,1.6,48), goldMat);
  comp.position.set(-1.2,-0.3,0);
  scene.add(comp);

  const spot = new THREE.SpotLight('#ffec9b', 2, 12, 0.5, 0.45, 1);
  spot.position.set(-1.2,1.9,0);
  spot.castShadow = true;
  scene.add(spot);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  return { scene, camera, renderer };
}