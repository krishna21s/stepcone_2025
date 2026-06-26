import * as THREE from 'three';

export const GoldMaterial = new THREE.MeshPhysicalMaterial({
  color: '#d4af37',
  metalness: 1,
  roughness: 0.2,
  clearcoat: 0.35,
  clearcoatRoughness: 0.15,
  emissive: '#8b6b15',
  emissiveIntensity: 0.3,
});

export const DarkMetalMaterial = new THREE.MeshStandardMaterial({
  color: '#111314',
  metalness: 0.9,
  roughness: 0.55,
  emissive: '#050505',
  emissiveIntensity: 0.15,
});

export const NeonMaterial = new THREE.MeshStandardMaterial({
  color: '#262626',
  metalness: 0.4,
  roughness: 0.3,
  emissive: '#ffc94d',
  emissiveIntensity: 1.2,
  toneMapped: false,
});