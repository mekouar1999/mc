

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    whales_1: THREE.Mesh;
    whales_2: THREE.Mesh;
    whales_3: THREE.Mesh;
    whales_4: THREE.Mesh;
    whales_5: THREE.Mesh;
    whales_6: THREE.Mesh;
    whales_7: THREE.Mesh;
    whales_8: THREE.Mesh;
    whales_9: THREE.Mesh;
    whales_10: THREE.Mesh;
    whales_11: THREE.Mesh;
    whales_12: THREE.Mesh;
    whales_13: THREE.Mesh;
    whales_14: THREE.Mesh;
    whales_15: THREE.Mesh;
    whales_16: THREE.Mesh;
    whales_17: THREE.Mesh;
    whales_18: THREE.Mesh;
    whales_19: THREE.Mesh;
    whales_20: THREE.Mesh;
    whales_21: THREE.Mesh;
    whales_22: THREE.Mesh;
    whales_23: THREE.Mesh;
    whales_24: THREE.Mesh;
    whales_25: THREE.Mesh;
    whales_26: THREE.Mesh;
    whales_27: THREE.Mesh;
    whales_28: THREE.Mesh;
    whales_29: THREE.Mesh;
    whales_30: THREE.Mesh;
    whales_31: THREE.Mesh;
    whales_32: THREE.Mesh;
    whales_33: THREE.Mesh;
    whales_34: THREE.Mesh;
    whales_35: THREE.Mesh;
    whales_36: THREE.Mesh;
    whales_37: THREE.Mesh;
    whales_38: THREE.Mesh;
    whales_39: THREE.Mesh;
    whales_40: THREE.Mesh;
    whales_41: THREE.Mesh;
    whales_42: THREE.Mesh;
    whales_43: THREE.Mesh;
    whales_44: THREE.Mesh;
    whales_45: THREE.Mesh;
    whales_46: THREE.Mesh;
    whales_47: THREE.Mesh;
    whales_48: THREE.Mesh;
    whales_49: THREE.Mesh;
    whales_50: THREE.Mesh;
    whales_51: THREE.Mesh;
    whales_52: THREE.Mesh;
  };
  materials: {
    Color_B18: THREE.MeshPhysicalMaterial;
    Color_003: THREE.MeshPhysicalMaterial;
    _Gray_Glass_3: THREE.MeshPhysicalMaterial;
    FrontColor: THREE.MeshPhysicalMaterial;
    Wood_Bamboo_Light: THREE.MeshPhysicalMaterial;
    Leaves: THREE.MeshPhysicalMaterial;
    _Vegetation_Bark_Ponderosa_1: THREE.MeshPhysicalMaterial;
    _White_: THREE.MeshPhysicalMaterial;
    Color_007: THREE.MeshPhysicalMaterial;
    _Gray8_: THREE.MeshPhysicalMaterial;
    _Gray3_: THREE.MeshPhysicalMaterial;
    _LavenderBlush_: THREE.MeshPhysicalMaterial;
    _ForestGreen_1: THREE.MeshPhysicalMaterial;
    _Green_: THREE.MeshPhysicalMaterial;
    _DarkGreen_: THREE.MeshPhysicalMaterial;
    _DarkGreen_1: THREE.MeshPhysicalMaterial;
    _ForestGreen_: THREE.MeshPhysicalMaterial;
    _LightCoral_: THREE.MeshPhysicalMaterial;
    _Charcoal_: THREE.MeshPhysicalMaterial;
    _Gainsboro_: THREE.MeshPhysicalMaterial;
    _Silver_: THREE.MeshPhysicalMaterial;
    _Gray_Glass_4: THREE.MeshPhysicalMaterial;
    _WhiteSmoke_: THREE.MeshPhysicalMaterial;
    Brake_Light_Red: THREE.MeshPhysicalMaterial;
    Stone_Blocks_Ashlar1: THREE.MeshPhysicalMaterial;
    Stone_Sandstone_Ashlar_Light: THREE.MeshPhysicalMaterial;
    Roofing_Tile_Spanish: THREE.MeshPhysicalMaterial;
    Wood_Cherry: THREE.MeshPhysicalMaterial;
    Asphalt_Old: THREE.MeshPhysicalMaterial;
    Vegetation_Ivy_Hedera: THREE.MeshPhysicalMaterial;
    Fencing_Wood_Rail: THREE.MeshPhysicalMaterial;
    Stone_Flagstone_Ashlar: THREE.MeshPhysicalMaterial;
    Color_A21: THREE.MeshPhysicalMaterial;
    _Color_000_1: THREE.MeshPhysicalMaterial;
    Vegetation_Kudzu: THREE.MeshPhysicalMaterial;
    Stone_Rusticated_Ashlar: THREE.MeshPhysicalMaterial;
    Stone_Blocks_Ashlar: THREE.MeshPhysicalMaterial;
    Fencing_Chain_Link: THREE.MeshPhysicalMaterial;
    Stone_Masonry_Multi: THREE.MeshPhysicalMaterial;
    Metal_Rough: THREE.MeshPhysicalMaterial;
    Metal_Aluminum_Anodized: THREE.MeshPhysicalMaterial;
    Color_D05: THREE.MeshPhysicalMaterial;
    Color_C12: THREE.MeshPhysicalMaterial;
    M_009eau: THREE.MeshPhysicalMaterial;
    _Water_Sparkling_1: THREE.MeshPhysicalMaterial;
    rondin_hori: THREE.MeshPhysicalMaterial;
    autoclave: THREE.MeshPhysicalMaterial;
    Water_Deep: THREE.MeshPhysicalMaterial;
    Water_Pool: THREE.MeshPhysicalMaterial;
    _Peru_: THREE.MeshPhysicalMaterial;
    _Wood_cherry_: THREE.MeshPhysicalMaterial;
    _CorrogateShiny_: THREE.MeshPhysicalMaterial;
  };
};

export function WhalesModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/whales.glb")  as unknown as GLTFResult;;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_1.geometry}
          material={materials.Color_B18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_2.geometry}
          material={materials.Color_003}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_3.geometry}
          material={materials._Gray_Glass_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_4.geometry}
          material={materials.FrontColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_5.geometry}
          material={materials.Wood_Bamboo_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_6.geometry}
          material={materials.Leaves}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_7.geometry}
          material={materials._Vegetation_Bark_Ponderosa_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_8.geometry}
          material={materials._White_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_9.geometry}
          material={materials.Color_007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_10.geometry}
          material={materials._Gray8_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_11.geometry}
          material={materials._Gray3_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_12.geometry}
          material={materials._LavenderBlush_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_13.geometry}
          material={materials._ForestGreen_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_14.geometry}
          material={materials._Green_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_15.geometry}
          material={materials._DarkGreen_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_16.geometry}
          material={materials._DarkGreen_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_17.geometry}
          material={materials._ForestGreen_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_18.geometry}
          material={materials._LightCoral_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_19.geometry}
          material={materials._Charcoal_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_20.geometry}
          material={materials._Gainsboro_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_21.geometry}
          material={materials._Silver_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_22.geometry}
          material={materials._Gray_Glass_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_23.geometry}
          material={materials._WhiteSmoke_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_24.geometry}
          material={materials.Brake_Light_Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_25.geometry}
          material={materials.Stone_Blocks_Ashlar1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_26.geometry}
          material={materials.Stone_Sandstone_Ashlar_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_27.geometry}
          material={materials.Roofing_Tile_Spanish}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_28.geometry}
          material={materials.Wood_Cherry}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_29.geometry}
          material={materials.Asphalt_Old}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_30.geometry}
          material={materials.Vegetation_Ivy_Hedera}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_31.geometry}
          material={materials.Fencing_Wood_Rail}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_32.geometry}
          material={materials.Stone_Flagstone_Ashlar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_33.geometry}
          material={materials.Color_A21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_34.geometry}
          material={materials._Color_000_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_35.geometry}
          material={materials.Vegetation_Kudzu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_36.geometry}
          material={materials.Stone_Rusticated_Ashlar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_37.geometry}
          material={materials.Stone_Blocks_Ashlar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_38.geometry}
          material={materials.Fencing_Chain_Link}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_39.geometry}
          material={materials.Stone_Masonry_Multi}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_40.geometry}
          material={materials.Metal_Rough}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_41.geometry}
          material={materials.Metal_Aluminum_Anodized}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_42.geometry}
          material={materials.Color_D05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_43.geometry}
          material={materials.Color_C12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_44.geometry}
          material={materials.M_009eau}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_45.geometry}
          material={materials._Water_Sparkling_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_46.geometry}
          material={materials.rondin_hori}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_47.geometry}
          material={materials.autoclave}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_48.geometry}
          material={materials.Water_Deep}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_49.geometry}
          material={materials.Water_Pool}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_50.geometry}
          material={materials._Peru_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_51.geometry}
          material={materials._Wood_cherry_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.whales_52.geometry}
          material={materials._CorrogateShiny_}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/whales.glb");