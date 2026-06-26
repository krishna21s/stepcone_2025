import { Environment, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
export const Experience = () => {
  return (
    <>
     
        <Book />
      
      <OrbitControls />
      <Environment preset="warehouse" intensity={0.2}></Environment>
      {/* <directionalLight
        position={[2, 5, 1]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      /> */}
      <mesh position-y={-2.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
