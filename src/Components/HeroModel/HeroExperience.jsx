import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; 

const ImagePlane = () => {
  const texture = useLoader(THREE.TextureLoader, "/images/HeroImg.png");
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const t = clock.getElapsedTime();
    mesh.position.y = 0.3 + Math.sin(t) * 0.04;
    mesh.position.x = 0.4 + Math.cos(t * 0.04) * 0.03;
    mesh.rotation.z = Math.sin(t * 0.3) * 0.03;
  });

  
// GSAP entry animation
// GSAP entry animation
useGSAP(() => {
  if (!meshRef.current) return;

  const tl = gsap.timeline({ delay: 0 }); // start immediately

  // Position first
  tl.fromTo(
    meshRef.current.position,
    { y: -2, z: 2 },
    {
      y: 0,
      z: 0,
      duration: 1.5,
      ease: "expo.out",
    },
    0
  )
  // Fade slightly earlier
  .fromTo(
    meshRef.current.material,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
    },
    0.2
  )
  // Scale smoothly (no bounce)
  .fromTo(
    meshRef.current.scale,
    { x: 0.85, y: 0.85, z: 0.85 },
    {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.2,
      ease: "power2.out", // smooth stop, no bounce
    },
    0.5
  );
}, []);

  return (
    <mesh ref={meshRef} position={[3, 3, 0]}>
      <planeGeometry args={[3.8, 3.8]} />
      <meshStandardMaterial map={texture} transparent />
    </mesh>
  );
};

export const HeroExperience = () => (
  
  <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 5, 5]} intensity={1.5} />
    <pointLight position={[-5, -6, 5]} intensity={1} color="black" />
    <ImagePlane />
  </Canvas>
);

export default HeroExperience;
