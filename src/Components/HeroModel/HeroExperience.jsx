import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

const ImagePlane = () => {
  const texture = useLoader(THREE.TextureLoader, "/images/HeroImg.png");
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const t = clock.getElapsedTime();
    mesh.position.y = 0.3 + Math.sin(t) * 0.02;
    mesh.position.x = 0.4 + Math.cos(t * 0.02) * 0.01;
    mesh.rotation.z = Math.sin(t * 0.3) * 0.01;

    // glow pulsing - JS safe
    if (mesh.material && mesh.material.isMeshStandardMaterial) {
      mesh.material.emissiveIntensity = 0.2 + (Math.sin(t * 1) + 1) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[3, 3, 0]}>
      <planeGeometry args={[4.5, 4.5]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
};

export const HeroExperience = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
    <ambientLight intensity={0.8} />
    <directionalLight position={[5, 5, 5]} intensity={2} />
    <pointLight position={[-3, -3, 5]} intensity={1.2} color="black" />
    <ImagePlane />
  </Canvas>
);

export default HeroExperience;
