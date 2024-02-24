

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    beachh_1: THREE.Mesh;
    beachh_2: THREE.Mesh;
    beachh_3: THREE.Mesh;
    beachh_4: THREE.Mesh;
    beachh_5: THREE.Mesh;
    beachh_6: THREE.Mesh;
    beachh_7: THREE.Mesh;
    beachh_8: THREE.Mesh;
    beachh_9: THREE.Mesh;
    beachh_10: THREE.Mesh;
    beachh_11: THREE.Mesh;
    beachh_12: THREE.Mesh;
    beachh_13: THREE.Mesh;
    beachh_14: THREE.Mesh;
    beachh_15: THREE.Mesh;
    beachh_16: THREE.Mesh;
    beachh_17: THREE.Mesh;
    beachh_18: THREE.Mesh;
    beachh_19: THREE.Mesh;
    beachh_20: THREE.Mesh;
    beachh_21: THREE.Mesh;
    beachh_22: THREE.Mesh;
    beachh_23: THREE.Mesh;
  };
  materials: {
    _WhiteSmoke_: THREE.MeshPhysicalMaterial;
    Wood_Plywood_Knots: THREE.MeshPhysicalMaterial;
    _Wood_Plywood_Knots_1: THREE.MeshPhysicalMaterial;
    _Brown_: THREE.MeshPhysicalMaterial;
    Textile_Ornate_Green: THREE.MeshPhysicalMaterial;
    FrontColor: THREE.MeshPhysicalMaterial;
    _CoolGray6_: THREE.MeshPhysicalMaterial;
    Brake_Light_Red: THREE.MeshPhysicalMaterial;
    _Charcoal_: THREE.MeshPhysicalMaterial;
    _Gray_Glass_1: THREE.MeshPhysicalMaterial;
    _Gray_: THREE.MeshPhysicalMaterial;
    _SpringGreen_: THREE.MeshPhysicalMaterial;
    _MidnightBlue_: THREE.MeshPhysicalMaterial;
    _WarmGray8_: THREE.MeshPhysicalMaterial;
    _2: THREE.MeshPhysicalMaterial;
    _4: THREE.MeshPhysicalMaterial;
    _Chartreuse_: THREE.MeshPhysicalMaterial;
    _DarkMagenta_: THREE.MeshPhysicalMaterial;
    _9: THREE.MeshPhysicalMaterial;
    _10: THREE.MeshPhysicalMaterial;
    _11: THREE.MeshPhysicalMaterial;
    Groundcover_Sand_Smooth: THREE.MeshPhysicalMaterial;
    Water_Pool_Light: THREE.MeshPhysicalMaterial;
  };
};

export function BeachhModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/beachh.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_1.geometry}
          material={materials._WhiteSmoke_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_2.geometry}
          material={materials.Wood_Plywood_Knots}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_3.geometry}
          material={materials._Wood_Plywood_Knots_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_4.geometry}
          material={materials._Brown_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_5.geometry}
          material={materials.Textile_Ornate_Green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_6.geometry}
          material={materials.FrontColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_7.geometry}
          material={materials._CoolGray6_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_8.geometry}
          material={materials.Brake_Light_Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_9.geometry}
          material={materials._Charcoal_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_10.geometry}
          material={materials._Gray_Glass_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_11.geometry}
          material={materials._Gray_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_12.geometry}
          material={materials._SpringGreen_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_13.geometry}
          material={materials._MidnightBlue_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_14.geometry}
          material={materials._WarmGray8_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_15.geometry}
          material={materials._2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_16.geometry}
          material={materials._4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_17.geometry}
          material={materials._Chartreuse_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_18.geometry}
          material={materials._DarkMagenta_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_19.geometry}
          material={materials._9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_20.geometry}
          material={materials._10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_21.geometry}
          material={materials._11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_22.geometry}
          material={materials.Groundcover_Sand_Smooth}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.beachh_23.geometry}
          material={materials.Water_Pool_Light}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/beachh.glb");
