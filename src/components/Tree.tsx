import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Tree_1: THREE.Mesh;
    Tree_2: THREE.Mesh;
    Tree_3: THREE.Mesh;
    Tree_4: THREE.Mesh;
  };
  materials: {
    ["trunk color"]: THREE.MeshPhysicalMaterial;
    ["branch color.001"]: THREE.MeshPhysicalMaterial;
    ["branch color"]: THREE.MeshPhysicalMaterial;
    ["branch color.003"]: THREE.MeshPhysicalMaterial;
  };
};

export function TreeModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/tree.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes.Tree_1.geometry}
        material={materials["trunk color"]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Tree_2.geometry}
        material={materials["branch color.001"]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Tree_3.geometry}
        material={materials["branch color"]}
      />
      <mesh
        receiveShadow
        geometry={nodes.Tree_4.geometry}
        material={materials["branch color.003"]}
      />
    </group>
  );
}

useGLTF.preload("/models/tree.glb");
