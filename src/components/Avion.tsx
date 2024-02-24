

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    avion_1: THREE.Mesh;
    avion_2: THREE.Mesh;
    avion_3: THREE.Mesh;
    avion_4: THREE.Mesh;
    avion_5: THREE.Mesh;
    avion_6: THREE.Mesh;
    avion_7: THREE.Mesh;
    avion_8: THREE.Mesh;
    avion_9: THREE.Mesh;
    avion_10: THREE.Mesh;
    avion_11: THREE.Mesh;
    avion_12: THREE.Mesh;
    avion_13: THREE.Mesh;
    avion_14: THREE.Mesh;
    avion_15: THREE.Mesh;
    avion_16: THREE.Mesh;
    avion_17: THREE.Mesh;
    avion_18: THREE.Mesh;
    avion_19: THREE.Mesh;
    avion_20: THREE.Mesh;
    avion_21: THREE.Mesh;
    avion_22: THREE.Mesh;
    avion_23: THREE.Mesh;
    avion_24: THREE.Mesh;
    avion_25: THREE.Mesh;
    avion_26: THREE.Mesh;
    avion_27: THREE.Mesh;
    avion_28: THREE.Mesh;
    avion_29: THREE.Mesh;
    avion_30: THREE.Mesh;
    avion_31: THREE.Mesh;
    avion_32: THREE.Mesh;
    avion_33: THREE.Mesh;
    avion_34: THREE.Mesh;
  };
  materials: {
    Green: THREE.MeshPhysicalMaterial;
    _Beige_1: THREE.MeshPhysicalMaterial;
    _LightGray_: THREE.MeshPhysicalMaterial;
    jean_blue: THREE.MeshPhysicalMaterial;
    M_96_96_96: THREE.MeshPhysicalMaterial;
    M_0135_DarkGray: THREE.MeshPhysicalMaterial;
    _Charcoal_: THREE.MeshPhysicalMaterial;
    Color_B24: THREE.MeshPhysicalMaterial;
    Google_Earth_Snapshot1: THREE.MeshPhysicalMaterial;
    Concrete_Stamped_Ashlar: THREE.MeshPhysicalMaterial;
    M_0129_WhiteSmoke: THREE.MeshPhysicalMaterial;
    _3_1: THREE.MeshPhysicalMaterial;
    _1: THREE.MeshPhysicalMaterial;
    Gold: THREE.MeshPhysicalMaterial;
    _3: THREE.MeshPhysicalMaterial;
    Orange: THREE.MeshPhysicalMaterial;
    _White_: THREE.MeshPhysicalMaterial;
    _Gainsboro_1: THREE.MeshPhysicalMaterial;
    _Black_: THREE.MeshPhysicalMaterial;
    _Silver_: THREE.MeshPhysicalMaterial;
    _Gray_Glass_: THREE.MeshPhysicalMaterial;
    _Red_: THREE.MeshPhysicalMaterial;
    _DimGray_: THREE.MeshPhysicalMaterial;
    _DarkBlue_3: THREE.MeshPhysicalMaterial;
    _MediumAquamarine_: THREE.MeshPhysicalMaterial;
    _DodgerBlue_1: THREE.MeshPhysicalMaterial;
    _CornflowerBlue_1: THREE.MeshPhysicalMaterial;
    _6: THREE.MeshPhysicalMaterial;
    _7: THREE.MeshPhysicalMaterial;
    _5: THREE.MeshPhysicalMaterial;
    Translucent_Glass_Gray: THREE.MeshPhysicalMaterial;
    Wood_Fence: THREE.MeshPhysicalMaterial;
    Pavers_Stone_Walk: THREE.MeshPhysicalMaterial;
    Color_004: THREE.MeshPhysicalMaterial;
  };
};

export function AvionModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/avion.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_1.geometry}
          material={materials.Green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_2.geometry}
          material={materials._Beige_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_3.geometry}
          material={materials._LightGray_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_4.geometry}
          material={materials.jean_blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_5.geometry}
          material={materials.M_96_96_96}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_6.geometry}
          material={materials.M_0135_DarkGray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_7.geometry}
          material={materials._Charcoal_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_8.geometry}
          material={materials.Color_B24}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_9.geometry}
          material={materials.Google_Earth_Snapshot1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_10.geometry}
          material={materials.Concrete_Stamped_Ashlar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_11.geometry}
          material={materials.M_0129_WhiteSmoke}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_12.geometry}
          material={materials._3_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_13.geometry}
          material={materials._1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_14.geometry}
          material={materials.Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_15.geometry}
          material={materials._3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_16.geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_17.geometry}
          material={materials._White_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_18.geometry}
          material={materials._Gainsboro_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_19.geometry}
          material={materials._Black_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_20.geometry}
          material={materials._Silver_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_21.geometry}
          material={materials._Gray_Glass_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_22.geometry}
          material={materials._Red_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_23.geometry}
          material={materials._DimGray_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_24.geometry}
          material={materials._DarkBlue_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_25.geometry}
          material={materials._MediumAquamarine_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_26.geometry}
          material={materials._DodgerBlue_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_27.geometry}
          material={materials._CornflowerBlue_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_28.geometry}
          material={materials._6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_29.geometry}
          material={materials._7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_30.geometry}
          material={materials._5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_31.geometry}
          material={materials.Translucent_Glass_Gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_32.geometry}
          material={materials.Wood_Fence}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_33.geometry}
          material={materials.Pavers_Stone_Walk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.avion_34.geometry}
          material={materials.Color_004}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/avion.glb");