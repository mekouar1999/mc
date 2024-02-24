import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ciel_1: THREE.Mesh;
    ciel_2: THREE.Mesh;
    ciel_3: THREE.Mesh;
    ciel_4: THREE.Mesh;
    ciel_5: THREE.Mesh;
  };
  materials: {
    ["FrontColor.003"]: THREE.MeshPhysicalMaterial;
    _Tan_Glass_: THREE.MeshPhysicalMaterial;
    ["_Gainsboro_.001"]: THREE.MeshPhysicalMaterial;
    ["_Silver_.001"]: THREE.MeshPhysicalMaterial;
    _Blue_Glass_: THREE.MeshPhysicalMaterial;
  };
};

export function CielModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/ciel.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.ciel_1 as THREE.Mesh).geometry}
          material={materials["FrontColor.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.ciel_2 as THREE.Mesh).geometry}
          material={materials._Tan_Glass_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.ciel_3 as THREE.Mesh).geometry}
          material={materials["_Gainsboro_.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.ciel_4 as THREE.Mesh).geometry}
          material={materials["_Silver_.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.ciel_5 as THREE.Mesh).geometry}
          material={materials._Blue_Glass_}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/ciel.glb");
