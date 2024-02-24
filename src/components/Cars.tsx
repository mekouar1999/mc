
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    cars_1: THREE.Mesh;
    cars_2: THREE.Mesh;
    cars_3: THREE.Mesh;
    cars_4: THREE.Mesh;
    cars_5: THREE.Mesh;
    cars_6: THREE.Mesh;
    cars_7: THREE.Mesh;
    cars_8: THREE.Mesh;
    cars_9: THREE.Mesh;
    cars_10: THREE.Mesh;
    cars_11: THREE.Mesh;
    cars_12: THREE.Mesh;
    cars_13: THREE.Mesh;
    cars_14: THREE.Mesh;
    cars_15: THREE.Mesh;
    cars_16: THREE.Mesh;
    cars_17: THREE.Mesh;
    cars_18: THREE.Mesh;
    cars_19: THREE.Mesh;
    cars_20: THREE.Mesh;
    cars_21: THREE.Mesh;
    cars_22: THREE.Mesh;
    cars_23: THREE.Mesh;
    cars_24: THREE.Mesh;
    cars_25: THREE.Mesh;
    cars_26: THREE.Mesh;
    cars_27: THREE.Mesh;
    cars_28: THREE.Mesh;
    cars_29: THREE.Mesh;
    cars_30: THREE.Mesh;
    cars_31: THREE.Mesh;
    cars_32: THREE.Mesh;
    cars_33: THREE.Mesh;
    cars_34: THREE.Mesh;
    cars_35: THREE.Mesh;
    cars_36: THREE.Mesh;
    cars_37: THREE.Mesh;
    cars_38: THREE.Mesh;
    cars_39: THREE.Mesh;
    cars_40: THREE.Mesh;
    cars_41: THREE.Mesh;
    cars_42: THREE.Mesh;
    cars_43: THREE.Mesh;
    cars_44: THREE.Mesh;
    cars_45: THREE.Mesh;
    cars_46: THREE.Mesh;
    cars_47: THREE.Mesh;
    cars_48: THREE.Mesh;
    cars_49: THREE.Mesh;
    cars_50: THREE.Mesh;
    cars_51: THREE.Mesh;
    cars_52: THREE.Mesh;
    cars_53: THREE.Mesh;
    cars_54: THREE.Mesh;
    cars_55: THREE.Mesh;
    cars_56: THREE.Mesh;
    cars_57: THREE.Mesh;
    cars_58: THREE.Mesh;
    cars_59: THREE.Mesh;
    cars_60: THREE.Mesh;
    cars_61: THREE.Mesh;
    cars_62: THREE.Mesh;
    cars_63: THREE.Mesh;
    cars_64: THREE.Mesh;
    cars_65: THREE.Mesh;
    cars_66: THREE.Mesh;
    cars_67: THREE.Mesh;
    cars_68: THREE.Mesh;
    cars_69: THREE.Mesh;
    cars_70: THREE.Mesh;
    cars_71: THREE.Mesh;
  };
  materials: {
    Color_009: THREE.MeshPhysicalMaterial;
    Color_002: THREE.MeshPhysicalMaterial;
    Color_I04: THREE.MeshPhysicalMaterial;
    _Burnt_Umber_1: THREE.MeshPhysicalMaterial;
    _DimGray_: THREE.MeshPhysicalMaterial;
    ["_Charcoal_.001"]: THREE.MeshPhysicalMaterial;
    Color_007: THREE.MeshPhysicalMaterial;
    Color_C02: THREE.MeshPhysicalMaterial;
    Color_008: THREE.MeshPhysicalMaterial;
    Translucent_Glass_Gray: THREE.MeshPhysicalMaterial;
    ["FrontColor.001"]: THREE.MeshPhysicalMaterial;
    Color_A06: THREE.MeshPhysicalMaterial;
    M_0023_FireBrick: THREE.MeshPhysicalMaterial;
    ["_Silver_.001"]: THREE.MeshPhysicalMaterial;
    _WhiteSmoke_: THREE.MeshPhysicalMaterial;
    ["_Black_.001"]: THREE.MeshPhysicalMaterial;
    Navy: THREE.MeshPhysicalMaterial;
    _DarkGray_: THREE.MeshPhysicalMaterial;
    Brake_Light_Red: THREE.MeshPhysicalMaterial;
    _Gray_Glass_: THREE.MeshPhysicalMaterial;
    _Dark_Brown_: THREE.MeshPhysicalMaterial;
    _Gray_: THREE.MeshPhysicalMaterial;
    _SaddleBrown_1: THREE.MeshPhysicalMaterial;
    _Ivory_2: THREE.MeshPhysicalMaterial;
    _Prussian_Blue_: THREE.MeshPhysicalMaterial;
    _Concrete_rough_1: THREE.MeshPhysicalMaterial;
    vvvvvvvdeep_red: THREE.MeshPhysicalMaterial;
    _White_: THREE.MeshPhysicalMaterial;
    _Orange_1: THREE.MeshPhysicalMaterial;
    _Gray6_: THREE.MeshPhysicalMaterial;
    ["_LightGray_.001"]: THREE.MeshPhysicalMaterial;
    _5: THREE.MeshPhysicalMaterial;
    ["_19.001"]: THREE.MeshPhysicalMaterial;
    ["_18.001"]: THREE.MeshPhysicalMaterial;
    Color_006: THREE.MeshPhysicalMaterial;
    _Color_009_1: THREE.MeshPhysicalMaterial;
    Red1: THREE.MeshPhysicalMaterial;
    _Gainsboro_: THREE.MeshPhysicalMaterial;
    _Maroon_: THREE.MeshPhysicalMaterial;
    Material_1: THREE.MeshPhysicalMaterial;
    Material_20: THREE.MeshPhysicalMaterial;
    Material_10: THREE.MeshPhysicalMaterial;
    Material_2: THREE.MeshPhysicalMaterial;
    Material_21: THREE.MeshPhysicalMaterial;
    Material_19: THREE.MeshPhysicalMaterial;
    Material_24: THREE.MeshPhysicalMaterial;
    Material_9: THREE.MeshPhysicalMaterial;
    Material_26: THREE.MeshPhysicalMaterial;
    Material_27: THREE.MeshPhysicalMaterial;
    Material_23: THREE.MeshPhysicalMaterial;
    Material_3: THREE.MeshPhysicalMaterial;
    Material_7: THREE.MeshPhysicalMaterial;
    Material_8: THREE.MeshPhysicalMaterial;
    Material_18: THREE.MeshPhysicalMaterial;
    Material_5: THREE.MeshPhysicalMaterial;
    Material_4: THREE.MeshPhysicalMaterial;
    Material_25: THREE.MeshPhysicalMaterial;
    Material_15: THREE.MeshPhysicalMaterial;
    Material_11: THREE.MeshPhysicalMaterial;
    _Dark_Olive_1: THREE.MeshPhysicalMaterial;
    Charcoal_Light: THREE.MeshPhysicalMaterial;
    _CorrogateShiny_2: THREE.MeshPhysicalMaterial;
    keyboard: THREE.MeshPhysicalMaterial;
    _FireBrick_: THREE.MeshPhysicalMaterial;
    _11: THREE.MeshPhysicalMaterial;
    _10: THREE.MeshPhysicalMaterial;
    Concrete_Form_4x8: THREE.MeshPhysicalMaterial;
    Roofing_Shingles_Wood: THREE.MeshPhysicalMaterial;
    Cladding_Siding_White: THREE.MeshPhysicalMaterial;
    ["_17.001"]: THREE.MeshPhysicalMaterial;
    M_0014_DarkSalmon: THREE.MeshPhysicalMaterial;
  };
};

export function CarsModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/cars.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_1.geometry}
          material={materials.Color_009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_2.geometry}
          material={materials.Color_002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_3.geometry}
          material={materials.Color_I04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_4.geometry}
          material={materials._Burnt_Umber_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_5.geometry}
          material={materials._DimGray_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_6.geometry}
          material={materials["_Charcoal_.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_7.geometry}
          material={materials.Color_007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_8.geometry}
          material={materials.Color_C02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_9.geometry}
          material={materials.Color_008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_10.geometry}
          material={materials.Translucent_Glass_Gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_11.geometry}
          material={materials["FrontColor.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_12.geometry}
          material={materials.Color_A06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_13.geometry}
          material={materials.M_0023_FireBrick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_14.geometry}
          material={materials["_Silver_.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_15.geometry}
          material={materials._WhiteSmoke_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_16.geometry}
          material={materials["_Black_.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_17.geometry}
          material={materials.Navy}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_18.geometry}
          material={materials._DarkGray_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_19.geometry}
          material={materials.Brake_Light_Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_20.geometry}
          material={materials._Gray_Glass_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_21.geometry}
          material={materials._Dark_Brown_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_22.geometry}
          material={materials._Gray_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_23.geometry}
          material={materials._SaddleBrown_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_24.geometry}
          material={materials._Ivory_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_25.geometry}
          material={materials._Prussian_Blue_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_26.geometry}
          material={materials._Concrete_rough_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_27.geometry}
          material={materials.vvvvvvvdeep_red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_28.geometry}
          material={materials._White_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_29.geometry}
          material={materials._Orange_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_30.geometry}
          material={materials._Gray6_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_31.geometry}
          material={materials["_LightGray_.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_32.geometry}
          material={materials._5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_33.geometry}
          material={materials["_19.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_34.geometry}
          material={materials["_18.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_35.geometry}
          material={materials.Color_006}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_36.geometry}
          material={materials._Color_009_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_37.geometry}
          material={materials.Red1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_38.geometry}
          material={materials._Gainsboro_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_39.geometry}
          material={materials._Maroon_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_40.geometry}
          material={materials.Material_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_41.geometry}
          material={materials.Material_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_42.geometry}
          material={materials.Material_10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_43.geometry}
          material={materials.Material_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_44.geometry}
          material={materials.Material_21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_45.geometry}
          material={materials.Material_19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_46.geometry}
          material={materials.Material_24}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_47.geometry}
          material={materials.Material_9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_48.geometry}
          material={materials.Material_26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_49.geometry}
          material={materials.Material_27}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_50.geometry}
          material={materials.Material_23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_51.geometry}
          material={materials.Material_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_52.geometry}
          material={materials.Material_7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_53.geometry}
          material={materials.Material_8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_54.geometry}
          material={materials.Material_18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_55.geometry}
          material={materials.Material_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_56.geometry}
          material={materials.Material_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_57.geometry}
          material={materials.Material_25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_58.geometry}
          material={materials.Material_15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_59.geometry}
          material={materials.Material_11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_60.geometry}
          material={materials._Dark_Olive_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_61.geometry}
          material={materials.Charcoal_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_62.geometry}
          material={materials._CorrogateShiny_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_63.geometry}
          material={materials.keyboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_64.geometry}
          material={materials._FireBrick_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_65.geometry}
          material={materials._11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_66.geometry}
          material={materials._10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_67.geometry}
          material={materials.Concrete_Form_4x8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_68.geometry}
          material={materials.Roofing_Shingles_Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_69.geometry}
          material={materials.Cladding_Siding_White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_70.geometry}
          material={materials["_17.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cars_71.geometry}
          material={materials.M_0014_DarkSalmon}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/cars.glb");
