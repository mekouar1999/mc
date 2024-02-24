
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    pool_1: THREE.Mesh;
    pool_2: THREE.Mesh;
    pool_3: THREE.Mesh;
    pool_4: THREE.Mesh;
    pool_5: THREE.Mesh;
    pool_6: THREE.Mesh;
    pool_7: THREE.Mesh;
    pool_8: THREE.Mesh;
    pool_9: THREE.Mesh;
    pool_10: THREE.Mesh;
    pool_11: THREE.Mesh;
    pool_12: THREE.Mesh;
    pool_13: THREE.Mesh;
    pool_14: THREE.Mesh;
    pool_15: THREE.Mesh;
    pool_16: THREE.Mesh;
    pool_17: THREE.Mesh;
  };
  materials: {
    _auto_17: THREE.MeshPhysicalMaterial;
    _auto_18: THREE.MeshPhysicalMaterial;
    _auto_19: THREE.MeshPhysicalMaterial;
    _auto_20: THREE.MeshPhysicalMaterial;
    _auto_21: THREE.MeshPhysicalMaterial;
    _auto_22: THREE.MeshPhysicalMaterial;
    _auto_25: THREE.MeshPhysicalMaterial;
    _auto_24: THREE.MeshPhysicalMaterial;
    _auto_29: THREE.MeshPhysicalMaterial;
    _auto_35: THREE.MeshPhysicalMaterial;
    _auto_33: THREE.MeshPhysicalMaterial;
    _auto_11: THREE.MeshPhysicalMaterial;
    _auto_34: THREE.MeshPhysicalMaterial;
    _auto_36: THREE.MeshPhysicalMaterial;
    _auto_31: THREE.MeshPhysicalMaterial;
    _auto_9: THREE.MeshPhysicalMaterial;
    _auto_12: THREE.MeshPhysicalMaterial;
  };
};

export function PoolModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/pool.glb")  as unknown as GLTFResult;;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_1.geometry}
          material={materials._auto_17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_2.geometry}
          material={materials._auto_18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_3.geometry}
          material={materials._auto_19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_4.geometry}
          material={materials._auto_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_5.geometry}
          material={materials._auto_21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_6.geometry}
          material={materials._auto_22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_7.geometry}
          material={materials._auto_25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_8.geometry}
          material={materials._auto_24}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_9.geometry}
          material={materials._auto_29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_10.geometry}
          material={materials._auto_35}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_11.geometry}
          material={materials._auto_33}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_12.geometry}
          material={materials._auto_11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_13.geometry}
          material={materials._auto_34}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_14.geometry}
          material={materials._auto_36}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_15.geometry}
          material={materials._auto_31}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_16.geometry}
          material={materials._auto_9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pool_17.geometry}
          material={materials._auto_12}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/pool.glb");