import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Ch14: THREE.Mesh;
  };
  materials: {
    Ch14_Body: THREE.MeshPhysicalMaterial;
  };
};

export function AvatarModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/avatar.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ch14.geometry}
        material={materials.Ch14_Body}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/avatar.glb");
