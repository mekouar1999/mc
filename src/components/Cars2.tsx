

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cars2_1: THREE.Mesh;
    Cars2_2: THREE.Mesh;
    Cars2_3: THREE.Mesh;
    Cars2_4: THREE.Mesh;
    Cars2_5: THREE.Mesh;
    Cars2_6: THREE.Mesh;
    Cars2_7: THREE.Mesh;
    Cars2_8: THREE.Mesh;
    Cars2_9: THREE.Mesh;
    Cars2_10: THREE.Mesh;
    Cars2_11: THREE.Mesh;
    Cars2_12: THREE.Mesh;
    Cars2_13: THREE.Mesh;
    Cars2_14: THREE.Mesh;
    Cars2_15: THREE.Mesh;
    Cars2_16: THREE.Mesh;
    Cars2_17: THREE.Mesh;
    Cars2_18: THREE.Mesh;
    Cars2_19: THREE.Mesh;
    Cars2_20: THREE.Mesh;
    Cars2_21: THREE.Mesh;
    Cars2_22: THREE.Mesh;
    Cars2_23: THREE.Mesh;
    Cars2_24: THREE.Mesh;
    Cars2_25: THREE.Mesh;
    Cars2_26: THREE.Mesh;
    Cars2_27: THREE.Mesh;
    Cars2_28: THREE.Mesh;
    Cars2_29: THREE.Mesh;
    Cars2_30: THREE.Mesh;
    Cars2_31: THREE.Mesh;
    Cars2_32: THREE.Mesh;
    Cars2_33: THREE.Mesh;
    Cars2_34: THREE.Mesh;
    Cars2_35: THREE.Mesh;
    Cars2_36: THREE.Mesh;
    Cars2_37: THREE.Mesh;
    Cars2_38: THREE.Mesh;
    Cars2_39: THREE.Mesh;
    Cars2_40: THREE.Mesh;
    Cars2_41: THREE.Mesh;
    Cars2_42: THREE.Mesh;
    Cars2_43: THREE.Mesh;
    Cars2_44: THREE.Mesh;
    Cars2_45: THREE.Mesh;
    Cars2_46: THREE.Mesh;
    Cars2_47: THREE.Mesh;
    Cars2_48: THREE.Mesh;
    Cars2_49: THREE.Mesh;
    Cars2_50: THREE.Mesh;
    Cars2_51: THREE.Mesh;
    Cars2_52: THREE.Mesh;
    Cars2_53: THREE.Mesh;
    Cars2_54: THREE.Mesh;
    Cars2_55: THREE.Mesh;
  };
  materials: {
    FrontColor: THREE.MeshPhysicalMaterial;
    M_0023_FireBrick: THREE.MeshPhysicalMaterial;
    _Charcoal_: THREE.MeshPhysicalMaterial;
    _Silver_: THREE.MeshPhysicalMaterial;
    _Gray_: THREE.MeshPhysicalMaterial;
    _SaddleBrown_1: THREE.MeshPhysicalMaterial;
    _Ivory_2: THREE.MeshPhysicalMaterial;
    _LightGray_: THREE.MeshPhysicalMaterial;
    _5: THREE.MeshPhysicalMaterial;
    _19: THREE.MeshPhysicalMaterial;
    _18: THREE.MeshPhysicalMaterial;
    Color_002: THREE.MeshPhysicalMaterial;
    Color_006: THREE.MeshPhysicalMaterial;
    _Color_009_1: THREE.MeshPhysicalMaterial;
    Red1: THREE.MeshPhysicalMaterial;
    _Gainsboro_: THREE.MeshPhysicalMaterial;
    _CorrogateShiny_2: THREE.MeshPhysicalMaterial;
    keyboard: THREE.MeshPhysicalMaterial;
    _FireBrick_: THREE.MeshPhysicalMaterial;
    _11: THREE.MeshPhysicalMaterial;
    _10: THREE.MeshPhysicalMaterial;
    _Concrete_rough_1: THREE.MeshPhysicalMaterial;
    vvvvvvvdeep_red: THREE.MeshPhysicalMaterial;
    _White_: THREE.MeshPhysicalMaterial;
    _Orange_1: THREE.MeshPhysicalMaterial;
    _Gray6_: THREE.MeshPhysicalMaterial;
    Concrete_Form_4x8: THREE.MeshPhysicalMaterial;
    Translucent_Glass_Gray: THREE.MeshPhysicalMaterial;
    Roofing_Shingles_Wood: THREE.MeshPhysicalMaterial;
    Cladding_Siding_White: THREE.MeshPhysicalMaterial;
    _17: THREE.MeshPhysicalMaterial;
    M_0014_DarkSalmon: THREE.MeshPhysicalMaterial;
    Color_008: THREE.MeshPhysicalMaterial;
    _Color_A08_6: THREE.MeshPhysicalMaterial;
    Color_A08: THREE.MeshPhysicalMaterial;
    Color_A11: THREE.MeshPhysicalMaterial;
    Color_L02: THREE.MeshPhysicalMaterial;
    Grill_mesh: THREE.MeshPhysicalMaterial;
    Color_L03: THREE.MeshPhysicalMaterial;
    _LightGray_3: THREE.MeshPhysicalMaterial;
    Color_M09: THREE.MeshPhysicalMaterial;
    _DimGray_2: THREE.MeshPhysicalMaterial;
    Blacktop_New: THREE.MeshPhysicalMaterial;
    _Color_007_1: THREE.MeshPhysicalMaterial;
    Color_M08: THREE.MeshPhysicalMaterial;
    Color_004: THREE.MeshPhysicalMaterial;
    _Color_005_1: THREE.MeshPhysicalMaterial;
    Metal_Corrogated_Shiny: THREE.MeshPhysicalMaterial;
    Color_G16: THREE.MeshPhysicalMaterial;
    White: THREE.MeshPhysicalMaterial;
    Color_D01: THREE.MeshPhysicalMaterial;
    _Translucent_Glass_Gray_1: THREE.MeshPhysicalMaterial;
    Color_C06: THREE.MeshPhysicalMaterial;
    _Color_007_2: THREE.MeshPhysicalMaterial;
    Metal_Rough: THREE.MeshPhysicalMaterial;
  };
};

export function CarssModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/cars2.glb")  as unknown as GLTFResult;;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_1.geometry}
          material={materials.FrontColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_2.geometry}
          material={materials.M_0023_FireBrick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_3.geometry}
          material={materials._Charcoal_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_4.geometry}
          material={materials._Silver_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_5.geometry}
          material={materials._Gray_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_6.geometry}
          material={materials._SaddleBrown_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_7.geometry}
          material={materials._Ivory_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_8.geometry}
          material={materials._LightGray_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_9.geometry}
          material={materials._5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_10.geometry}
          material={materials._19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_11.geometry}
          material={materials._18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_12.geometry}
          material={materials.Color_002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_13.geometry}
          material={materials.Color_006}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_14.geometry}
          material={materials._Color_009_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_15.geometry}
          material={materials.Red1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_16.geometry}
          material={materials._Gainsboro_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_17.geometry}
          material={materials._CorrogateShiny_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_18.geometry}
          material={materials.keyboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_19.geometry}
          material={materials._FireBrick_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_20.geometry}
          material={materials._11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_21.geometry}
          material={materials._10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_22.geometry}
          material={materials._Concrete_rough_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_23.geometry}
          material={materials.vvvvvvvdeep_red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_24.geometry}
          material={materials._White_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_25.geometry}
          material={materials._Orange_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_26.geometry}
          material={materials._Gray6_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_27.geometry}
          material={materials.Concrete_Form_4x8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_28.geometry}
          material={materials.Translucent_Glass_Gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_29.geometry}
          material={materials.Roofing_Shingles_Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_30.geometry}
          material={materials.Cladding_Siding_White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_31.geometry}
          material={materials._17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_32.geometry}
          material={materials.M_0014_DarkSalmon}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_33.geometry}
          material={materials.Color_008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_34.geometry}
          material={materials._Color_A08_6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_35.geometry}
          material={materials.Color_A08}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_36.geometry}
          material={materials.Color_A11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_37.geometry}
          material={materials.Color_L02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_38.geometry}
          material={materials.Grill_mesh}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_39.geometry}
          material={materials.Color_L03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_40.geometry}
          material={materials._LightGray_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_41.geometry}
          material={materials.Color_M09}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_42.geometry}
          material={materials._DimGray_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_43.geometry}
          material={materials.Blacktop_New}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_44.geometry}
          material={materials._Color_007_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_45.geometry}
          material={materials.Color_M08}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_46.geometry}
          material={materials.Color_004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_47.geometry}
          material={materials._Color_005_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_48.geometry}
          material={materials.Metal_Corrogated_Shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_49.geometry}
          material={materials.Color_G16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_50.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_51.geometry}
          material={materials.Color_D01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_52.geometry}
          material={materials._Translucent_Glass_Gray_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_53.geometry}
          material={materials.Color_C06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_54.geometry}
          material={materials._Color_007_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cars2_55.geometry}
          material={materials.Metal_Rough}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/cars2.glb");
