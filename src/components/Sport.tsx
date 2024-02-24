
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sportt_1: THREE.Mesh;
    Sportt_2: THREE.Mesh;
    Sportt_3: THREE.Mesh;
    Sportt_4: THREE.Mesh;
    Sportt_5: THREE.Mesh;
    Sportt_6: THREE.Mesh;
    Sportt_7: THREE.Mesh;
    Sportt_8: THREE.Mesh;
    Sportt_9: THREE.Mesh;
    Sportt_10: THREE.Mesh;
    Sportt_11: THREE.Mesh;
    Sportt_12: THREE.Mesh;
    Sportt_13: THREE.Mesh;
    Sportt_14: THREE.Mesh;
    Sportt_15: THREE.Mesh;
    Sportt_16: THREE.Mesh;
    Sportt_17: THREE.Mesh;
    Sportt_18: THREE.Mesh;
    Sportt_19: THREE.Mesh;
    Sportt_20: THREE.Mesh;
    Sportt_21: THREE.Mesh;
    Sportt_22: THREE.Mesh;
    Sportt_23: THREE.Mesh;
    Sportt_24: THREE.Mesh;
    Sportt_25: THREE.Mesh;
    Sportt_26: THREE.Mesh;
    Sportt_27: THREE.Mesh;
    Sportt_28: THREE.Mesh;
    Sportt_29: THREE.Mesh;
    Sportt_30: THREE.Mesh;
    Sportt_31: THREE.Mesh;
    Sportt_32: THREE.Mesh;
    Sportt_33: THREE.Mesh;
    Sportt_34: THREE.Mesh;
    Sportt_35: THREE.Mesh;
    Sportt_36: THREE.Mesh;
    Sportt_37: THREE.Mesh;
    Sportt_38: THREE.Mesh;
    Sportt_39: THREE.Mesh;
    Sportt_40: THREE.Mesh;
    Sportt_41: THREE.Mesh;
    Sportt_42: THREE.Mesh;
    Sportt_43: THREE.Mesh;
    Sportt_44: THREE.Mesh;
    Sportt_45: THREE.Mesh;
    Sportt_46: THREE.Mesh;
    Sportt_47: THREE.Mesh;
    Sportt_48: THREE.Mesh;
  };
  materials: {
    _Wood_Cherry_Original_2: THREE.MeshPhysicalMaterial;
    Material44: THREE.MeshPhysicalMaterial;
    Metal_Panel1: THREE.MeshPhysicalMaterial;
    Fencing_Wood_Old: THREE.MeshPhysicalMaterial;
    Material45: THREE.MeshPhysicalMaterial;
    Translucent_Glass_Blue: THREE.MeshPhysicalMaterial;
    akb_bubinga: THREE.MeshPhysicalMaterial;
    _43: THREE.MeshPhysicalMaterial;
    _Color_B21_1: THREE.MeshPhysicalMaterial;
    Color_000: THREE.MeshPhysicalMaterial;
    _DarkRed_1: THREE.MeshPhysicalMaterial;
    _OrangeRed_: THREE.MeshPhysicalMaterial;
    _DimGray_1: THREE.MeshPhysicalMaterial;
    _Charcoal_2: THREE.MeshPhysicalMaterial;
    _Silver_1: THREE.MeshPhysicalMaterial;
    _SpringGreen_1: THREE.MeshPhysicalMaterial;
    _Black_2: THREE.MeshPhysicalMaterial;
    _Gray_1: THREE.MeshPhysicalMaterial;
    _DarkGray_1: THREE.MeshPhysicalMaterial;
    _LightGray_2: THREE.MeshPhysicalMaterial;
    Color_F16: THREE.MeshPhysicalMaterial;
    _Metal_Rough_2: THREE.MeshPhysicalMaterial;
    _Metal_Aluminum_Anodized_6: THREE.MeshPhysicalMaterial;
    _0137_Black_: THREE.MeshPhysicalMaterial;
    _0136_Charcoal_: THREE.MeshPhysicalMaterial;
    M_0136_Charcoal: THREE.MeshPhysicalMaterial;
    _0135_DarkGray_1: THREE.MeshPhysicalMaterial;
    M_0131_Silver: THREE.MeshPhysicalMaterial;
    _Color_001_1: THREE.MeshPhysicalMaterial;
    Material__6: THREE.MeshPhysicalMaterial;
    Material__2: THREE.MeshPhysicalMaterial;
    Material__7: THREE.MeshPhysicalMaterial;
    Material__3: THREE.MeshPhysicalMaterial;
    Material__4: THREE.MeshPhysicalMaterial;
    Material__5: THREE.MeshPhysicalMaterial;
    Material__8: THREE.MeshPhysicalMaterial;
    _Translucent_White: THREE.MeshPhysicalMaterial;
    Other_Metal_surface: THREE.MeshPhysicalMaterial;
    CGM_Aluminium: THREE.MeshPhysicalMaterial;
    _DarkGray_2: THREE.MeshPhysicalMaterial;
    _Chipboard_1: THREE.MeshPhysicalMaterial;
    _Green_3: THREE.MeshPhysicalMaterial;
    _Lime_: THREE.MeshPhysicalMaterial;
    _LightGray_1: THREE.MeshPhysicalMaterial;
    _DarkGray_3: THREE.MeshPhysicalMaterial;
    Groundcover_Gravel_1inch: THREE.MeshPhysicalMaterial;
    Ash_2_Hor: THREE.MeshPhysicalMaterial;
    _Beige_3: THREE.MeshPhysicalMaterial;
  };
};

export function SportModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/sport.glb")  as unknown as GLTFResult;;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_1.geometry}
          material={materials._Wood_Cherry_Original_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_2.geometry}
          material={materials.Material44}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_3.geometry}
          material={materials.Metal_Panel1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_4.geometry}
          material={materials.Fencing_Wood_Old}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_5.geometry}
          material={materials.Material45}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_6.geometry}
          material={materials.Translucent_Glass_Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_7.geometry}
          material={materials.akb_bubinga}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_8.geometry}
          material={materials._43}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_9.geometry}
          material={materials._Color_B21_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_10.geometry}
          material={materials.Color_000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_11.geometry}
          material={materials._DarkRed_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_12.geometry}
          material={materials._OrangeRed_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_13.geometry}
          material={materials._DimGray_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_14.geometry}
          material={materials._Charcoal_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_15.geometry}
          material={materials._Silver_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_16.geometry}
          material={materials._SpringGreen_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_17.geometry}
          material={materials._Black_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_18.geometry}
          material={materials._Gray_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_19.geometry}
          material={materials._DarkGray_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_20.geometry}
          material={materials._LightGray_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_21.geometry}
          material={materials.Color_F16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_22.geometry}
          material={materials._Metal_Rough_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_23.geometry}
          material={materials._Metal_Aluminum_Anodized_6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_24.geometry}
          material={materials._0137_Black_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_25.geometry}
          material={materials._0136_Charcoal_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_26.geometry}
          material={materials.M_0136_Charcoal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_27.geometry}
          material={materials._0135_DarkGray_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_28.geometry}
          material={materials.M_0131_Silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_29.geometry}
          material={materials._Color_001_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_30.geometry}
          material={materials.Material__6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_31.geometry}
          material={materials.Material__2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_32.geometry}
          material={materials.Material__7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_33.geometry}
          material={materials.Material__3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_34.geometry}
          material={materials.Material__4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_35.geometry}
          material={materials.Material__5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_36.geometry}
          material={materials.Material__8}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_37.geometry}
          material={materials._Translucent_White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_38.geometry}
          material={materials.Other_Metal_surface}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_39.geometry}
          material={materials.CGM_Aluminium}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_40.geometry}
          material={materials._DarkGray_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_41.geometry}
          material={materials._Chipboard_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_42.geometry}
          material={materials._Green_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_43.geometry}
          material={materials._Lime_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_44.geometry}
          material={materials._LightGray_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_45.geometry}
          material={materials._DarkGray_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_46.geometry}
          material={materials.Groundcover_Gravel_1inch}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_47.geometry}
          material={materials.Ash_2_Hor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sportt_48.geometry}
          material={materials._Beige_3}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/sport.glb");