
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    tennis_1: THREE.Mesh;
    tennis_2: THREE.Mesh;
    tennis_3: THREE.Mesh;
    tennis_4: THREE.Mesh;
  };
  materials: {
    ["FrontColor.002"]: THREE.MeshPhysicalMaterial;
    UV_tennis: THREE.MeshPhysicalMaterial;
    Fencing_Mesh_Blue: THREE.MeshPhysicalMaterial;
    Color_000: THREE.MeshPhysicalMaterial;
  };
};

export function TennisModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/tennis.glb")  as unknown as GLTFResult;;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tennis_1.geometry}
          material={materials["FrontColor.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tennis_2.geometry}
          material={materials.UV_tennis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tennis_3.geometry}
          material={materials.Fencing_Mesh_Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tennis_4.geometry}
          material={materials.Color_000}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/tennis.glb");
