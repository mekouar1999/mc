
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    finalee_1: THREE.Mesh;
    finalee_2: THREE.Mesh;
    finalee_3: THREE.Mesh;
    finalee_4: THREE.Mesh;
  };
  materials: {
    Wax_02: THREE.MeshPhysicalMaterial;
    Color_D02: THREE.MeshPhysicalMaterial;
    MICRO_WORLD__3_: THREE.MeshPhysicalMaterial;
    fi: THREE.MeshPhysicalMaterial;
  };
};

export function FinelModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/finel.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.finalee_1.geometry}
          material={materials.Wax_02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.finalee_2.geometry}
          material={materials.Color_D02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.finalee_3.geometry}
          material={materials.MICRO_WORLD__3_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.finalee_4.geometry}
          material={materials.fi}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/finel.glb");
