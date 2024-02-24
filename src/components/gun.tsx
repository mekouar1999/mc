

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    gun_1: THREE.Mesh;
    gun_2: THREE.Mesh;
    gun_3: THREE.Mesh;
    gun_4: THREE.Mesh;
    gun_5: THREE.Mesh;
    gun_6: THREE.Mesh;
    gun_7: THREE.Mesh;
    gun_8: THREE.Mesh;
    gun_9: THREE.Mesh;
    gun_10: THREE.Mesh;
  };
  materials: {
    ["FrontColor.010"]: THREE.MeshPhysicalMaterial;
    ["purple.005"]: THREE.MeshPhysicalMaterial;
    ["countertop.005"]: THREE.MeshPhysicalMaterial;
    ["gray.006"]: THREE.MeshPhysicalMaterial;
    ["canopy.005"]: THREE.MeshPhysicalMaterial;
    ["beidge.006"]: THREE.MeshPhysicalMaterial;
    ["black1.006"]: THREE.MeshPhysicalMaterial;
    ["skyblue.005"]: THREE.MeshPhysicalMaterial;
    ["red.008"]: THREE.MeshPhysicalMaterial;
    ["orange.005"]: THREE.MeshPhysicalMaterial;
  };
};


export function GunModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/gun.glb")  as unknown as GLTFResult;;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 2.84]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gun_1.geometry}
          material={materials["FrontColor.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gun_2.geometry}
          material={materials["purple.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gun_3.geometry}
          material={materials["countertop.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gun_4.geometry}
          material={materials["gray.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gun_5.geometry}
          material={materials["canopy.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gun_6.geometry}
          material={materials["beidge.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gun_7.geometry}
          material={materials["black1.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gun_8.geometry}
          material={materials["skyblue.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gun_9.geometry}
          material={materials["red.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gun_10.geometry}
          material={materials["orange.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/gun.glb");
