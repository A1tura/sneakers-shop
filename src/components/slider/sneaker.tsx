import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Vector3 } from "three";

import * as THREE from "three";

interface ISneakerProps {
  name: "sneaker" | "sneaker2";
  camera: [number, number, number];
  fov: number;
}

export const Sneaker = ({ name }: { name: string }) => {
  const { scene } = useGLTF(`/assets/models/scene.gltf`);
  const ref = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.8; // Adjust rotation speed as needed
    }
  });

  return (
    <group ref={ref}>
      <hemisphereLight intensity={1} groundColor="black" />
      <primitive object={scene} />
    </group>
  );
};

export const SneakerCanvas = ({ name, camera, fov }: ISneakerProps) => {
  return (
    <Canvas
      style={{ width: "100%", height: "40vh" }}
      camera={{ position: camera, fov }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={true} />
        <Sneaker name={name} />
      </Suspense>
    </Canvas>
  );
};

// import { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { Vector3 } from "three";

// interface ISneakerProps {
//   name: "sneaker" | "sneaker2";
//   camera: [number, number, number];
//   fov: number;
// }

// export const Sneaker = ({ name }: { name: string }) => {
//   const { scene } = useGLTF(`/assets/models/${name}/scene.gltf`);
//   const ref = useRef<THREE.Group>(null!);

//   useFrame((state, delta) => {
//     if (ref.current) {
//       ref.current.rotation.y += delta * 0.8; // Adjust rotation speed as needed
//     }
//   });

//   return (
//     <group ref={ref}>
//       <hemisphereLight intensity={1} groundColor="black" />
//       <primitive object={scene} />
//     </group>
//   );
// };

// export const SneakerCanvas = ({ name, camera, fov }: ISneakerProps) => {
//   return (
//     <Canvas
//       style={{ width: "100%", height: "40vh" }}
//       camera={{ position: camera, fov }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={null}>
//         <OrbitControls enableZoom={true} />
//         <Sneaker name={name} />
//       </Suspense>
//     </Canvas>
//   );
// };
