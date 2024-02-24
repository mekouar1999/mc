
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    park_1: THREE.Mesh;
    park_2: THREE.Mesh;
    park_3: THREE.Mesh;
    park_4: THREE.Mesh;
    park_5: THREE.Mesh;
    park_6: THREE.Mesh;
    park_7: THREE.Mesh;
    park_8: THREE.Mesh;
    park_9: THREE.Mesh;
    park_10: THREE.Mesh;
    park_11: THREE.Mesh;
    park_12: THREE.Mesh;
    park_13: THREE.Mesh;
    park_14: THREE.Mesh;
    park_15: THREE.Mesh;
    park_16: THREE.Mesh;
    park_17: THREE.Mesh;
    park_18: THREE.Mesh;
    park_19: THREE.Mesh;
    park_20: THREE.Mesh;
    park_21: THREE.Mesh;
    park_22: THREE.Mesh;
    park_23: THREE.Mesh;
    park_24: THREE.Mesh;
    park_25: THREE.Mesh;
    park_26: THREE.Mesh;
    park_27: THREE.Mesh;
    park_28: THREE.Mesh;
    park_29: THREE.Mesh;
    park_30: THREE.Mesh;
    park_31: THREE.Mesh;
    park_32: THREE.Mesh;
    park_33: THREE.Mesh;
    park_34: THREE.Mesh;
    park_35: THREE.Mesh;
    park_36: THREE.Mesh;
    park_37: THREE.Mesh;
    park_38: THREE.Mesh;
    park_39: THREE.Mesh;
    park_40: THREE.Mesh;
    park_41: THREE.Mesh;
    park_42: THREE.Mesh;
    park_43: THREE.Mesh;
    park_44: THREE.Mesh;
    park_45: THREE.Mesh;
    park_46: THREE.Mesh;
    park_47: THREE.Mesh;
    park_48: THREE.Mesh;
    park_49: THREE.Mesh;
    park_50: THREE.Mesh;
    park_51: THREE.Mesh;
    park_52: THREE.Mesh;
    park_53: THREE.Mesh;
    park_54: THREE.Mesh;
    park_55: THREE.Mesh;
    park_56: THREE.Mesh;
    park_57: THREE.Mesh;
    park_58: THREE.Mesh;
    park_59: THREE.Mesh;
    park_60: THREE.Mesh;
    park_61: THREE.Mesh;
    park_62: THREE.Mesh;
    park_63: THREE.Mesh;
    park_64: THREE.Mesh;
    park_65: THREE.Mesh;
    park_66: THREE.Mesh;
    park_67: THREE.Mesh;
    park_68: THREE.Mesh;
    park_69: THREE.Mesh;
    park_70: THREE.Mesh;
    park_71: THREE.Mesh;
    park_72: THREE.Mesh;
    park_73: THREE.Mesh;
    park_74: THREE.Mesh;
    park_75: THREE.Mesh;
    park_76: THREE.Mesh;
    park_77: THREE.Mesh;
    park_78: THREE.Mesh;
    park_79: THREE.Mesh;
    park_80: THREE.Mesh;
    park_81: THREE.Mesh;
    park_82: THREE.Mesh;
    park_83: THREE.Mesh;
    park_84: THREE.Mesh;
    park_85: THREE.Mesh;
    park_86: THREE.Mesh;
    park_87: THREE.Mesh;
    park_88: THREE.Mesh;
  };
  materials: {
    Color_I02: THREE.MeshPhysicalMaterial;
    Color_A01: THREE.MeshPhysicalMaterial;
    FrontColor: THREE.MeshPhysicalMaterial;
    Color_G02: THREE.MeshPhysicalMaterial;
    redhorse: THREE.MeshPhysicalMaterial;
    Color_E02: THREE.MeshPhysicalMaterial;
    bluehors: THREE.MeshPhysicalMaterial;
    _FloralWhite_: THREE.MeshPhysicalMaterial;
    Color_C06: THREE.MeshPhysicalMaterial;
    Color_005: THREE.MeshPhysicalMaterial;
    Color_C12: THREE.MeshPhysicalMaterial;
    Color_C02: THREE.MeshPhysicalMaterial;
    orangeye: THREE.MeshPhysicalMaterial;
    Color_D08: THREE.MeshPhysicalMaterial;
    Color_H04: THREE.MeshPhysicalMaterial;
    blueye: THREE.MeshPhysicalMaterial;
    Color_G07: THREE.MeshPhysicalMaterial;
    greeneye: THREE.MeshPhysicalMaterial;
    whiteeye: THREE.MeshPhysicalMaterial;
    Color_C14: THREE.MeshPhysicalMaterial;
    Color_A03: THREE.MeshPhysicalMaterial;
    Color_000: THREE.MeshPhysicalMaterial;
    Color_A24: THREE.MeshPhysicalMaterial;
    redeye: THREE.MeshPhysicalMaterial;
    Color_008: THREE.MeshPhysicalMaterial;
    Translucent_Glass_Blue: THREE.MeshPhysicalMaterial;
    Translucent_Block_Swirl: THREE.MeshPhysicalMaterial;
    Translucent_Glass_Red: THREE.MeshPhysicalMaterial;
    Translucent_Glass_Gold: THREE.MeshPhysicalMaterial;
    Translucent_Glass_Purple: THREE.MeshPhysicalMaterial;
    Translucent_Glass_Tinted: THREE.MeshPhysicalMaterial;
    _Dark_Brown_1: THREE.MeshPhysicalMaterial;
    Color_009: THREE.MeshPhysicalMaterial;
    _Charcoal_1: THREE.MeshPhysicalMaterial;
    horseeye: THREE.MeshPhysicalMaterial;
    horse: THREE.MeshPhysicalMaterial;
    Asphalt_Old: THREE.MeshPhysicalMaterial;
    Brick_Border_Decorative: THREE.MeshPhysicalMaterial;
    Wood_Lumber_ButtJoined: THREE.MeshPhysicalMaterial;
    Asphalt_Stripe_Texture: THREE.MeshPhysicalMaterial;
    Asphalt_Rubber_Black: THREE.MeshPhysicalMaterial;
    _Red_: THREE.MeshPhysicalMaterial;
    _Gainsboro_: THREE.MeshPhysicalMaterial;
    CLOWN_1: THREE.MeshPhysicalMaterial;
    CLOWN_3: THREE.MeshPhysicalMaterial;
    CLOWN_2: THREE.MeshPhysicalMaterial;
    clown4_1: THREE.MeshPhysicalMaterial;
    CLOWN_5: THREE.MeshPhysicalMaterial;
    CLOWN_6: THREE.MeshPhysicalMaterial;
    Color_A02: THREE.MeshPhysicalMaterial;
    Color_004: THREE.MeshPhysicalMaterial;
    _Color_007_1: THREE.MeshPhysicalMaterial;
    Color_H20: THREE.MeshPhysicalMaterial;
    psychedelic: THREE.MeshPhysicalMaterial;
    Color_D03: THREE.MeshPhysicalMaterial;
    Color_D25: THREE.MeshPhysicalMaterial;
    Color_007: THREE.MeshPhysicalMaterial;
    _28: THREE.MeshPhysicalMaterial;
    Color_C04: THREE.MeshPhysicalMaterial;
    Color_H11: THREE.MeshPhysicalMaterial;
    Color_C07: THREE.MeshPhysicalMaterial;
    Color_K03: THREE.MeshPhysicalMaterial;
    Color_I03: THREE.MeshPhysicalMaterial;
    Color_E01: THREE.MeshPhysicalMaterial;
    Color_G01: THREE.MeshPhysicalMaterial;
    Color_A22: THREE.MeshPhysicalMaterial;
    Color_B14: THREE.MeshPhysicalMaterial;
    _Color_003_1: THREE.MeshPhysicalMaterial;
    Color_B20: THREE.MeshPhysicalMaterial;
    _Color_B11_1: THREE.MeshPhysicalMaterial;
    Color_G13: THREE.MeshPhysicalMaterial;
    Wood_Board_OSB: THREE.MeshPhysicalMaterial;
    psychedelic1_: THREE.MeshPhysicalMaterial;
    Wood_Deck_Fake: THREE.MeshPhysicalMaterial;
    _29: THREE.MeshPhysicalMaterial;
    _30: THREE.MeshPhysicalMaterial;
    TiltAWhirlSign: THREE.MeshPhysicalMaterial;
    _26: THREE.MeshPhysicalMaterial;
    _25: THREE.MeshPhysicalMaterial;
    _27: THREE.MeshPhysicalMaterial;
    _DarkGoldenrod_: THREE.MeshPhysicalMaterial;
    jean_blue: THREE.MeshPhysicalMaterial;
    _Beige_1: THREE.MeshPhysicalMaterial;
    _Brown_: THREE.MeshPhysicalMaterial;
    _Gray6_: THREE.MeshPhysicalMaterial;
    _Charcoal_: THREE.MeshPhysicalMaterial;
    _Black_: THREE.MeshPhysicalMaterial;
    _Metal_Aluminum_Anodized_4: THREE.MeshPhysicalMaterial;
  };
};

export function ParkguyModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/parkguy.glb")  as unknown as GLTFResult;;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_1.geometry}
          material={materials.Color_I02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_2.geometry}
          material={materials.Color_A01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_3.geometry}
          material={materials.FrontColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_4.geometry}
          material={materials.Color_G02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_5.geometry}
          material={materials.redhorse}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_6.geometry}
          material={materials.Color_E02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_7.geometry}
          material={materials.bluehors}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_8.geometry}
          material={materials._FloralWhite_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_9.geometry}
          material={materials.Color_C06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_10.geometry}
          material={materials.Color_005}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_11.geometry}
          material={materials.Color_C12}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_12.geometry}
          material={materials.Color_C02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_13.geometry}
          material={materials.orangeye}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_14.geometry}
          material={materials.Color_D08}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_15.geometry}
          material={materials.Color_H04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_16.geometry}
          material={materials.blueye}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_17.geometry}
          material={materials.Color_G07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_18.geometry}
          material={materials.greeneye}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_19.geometry}
          material={materials.whiteeye}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_20.geometry}
          material={materials.Color_C14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_21.geometry}
          material={materials.Color_A03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_22.geometry}
          material={materials.Color_000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_23.geometry}
          material={materials.Color_A24}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_24.geometry}
          material={materials.redeye}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_25.geometry}
          material={materials.Color_008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_26.geometry}
          material={materials.Translucent_Glass_Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_27.geometry}
          material={materials.Translucent_Block_Swirl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_28.geometry}
          material={materials.Translucent_Glass_Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_29.geometry}
          material={materials.Translucent_Glass_Gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_30.geometry}
          material={materials.Translucent_Glass_Purple}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_31.geometry}
          material={materials.Translucent_Glass_Tinted}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_32.geometry}
          material={materials._Dark_Brown_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_33.geometry}
          material={materials.Color_009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_34.geometry}
          material={materials._Charcoal_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_35.geometry}
          material={materials.horseeye}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_36.geometry}
          material={materials.horse}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_37.geometry}
          material={materials.Asphalt_Old}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_38.geometry}
          material={materials.Brick_Border_Decorative}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_39.geometry}
          material={materials.Wood_Lumber_ButtJoined}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_40.geometry}
          material={materials.Asphalt_Stripe_Texture}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_41.geometry}
          material={materials.Asphalt_Rubber_Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_42.geometry}
          material={materials._Red_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_43.geometry}
          material={materials._Gainsboro_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_44.geometry}
          material={materials.CLOWN_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_45.geometry}
          material={materials.CLOWN_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_46.geometry}
          material={materials.CLOWN_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_47.geometry}
          material={materials.clown4_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_48.geometry}
          material={materials.CLOWN_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_49.geometry}
          material={materials.CLOWN_6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_50.geometry}
          material={materials.Color_A02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_51.geometry}
          material={materials.Color_004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_52.geometry}
          material={materials._Color_007_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_53.geometry}
          material={materials.Color_H20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_54.geometry}
          material={materials.psychedelic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_55.geometry}
          material={materials.Color_D03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_56.geometry}
          material={materials.Color_D25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_57.geometry}
          material={materials.Color_007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_58.geometry}
          material={materials._28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_59.geometry}
          material={materials.Color_C04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_60.geometry}
          material={materials.Color_H11}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_61.geometry}
          material={materials.Color_C07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_62.geometry}
          material={materials.Color_K03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_63.geometry}
          material={materials.Color_I03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_64.geometry}
          material={materials.Color_E01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_65.geometry}
          material={materials.Color_G01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_66.geometry}
          material={materials.Color_A22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_67.geometry}
          material={materials.Color_B14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_68.geometry}
          material={materials._Color_003_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_69.geometry}
          material={materials.Color_B20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_70.geometry}
          material={materials._Color_B11_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_71.geometry}
          material={materials.Color_G13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_72.geometry}
          material={materials.Wood_Board_OSB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_73.geometry}
          material={materials.psychedelic1_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_74.geometry}
          material={materials.Wood_Deck_Fake}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_75.geometry}
          material={materials._29}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_76.geometry}
          material={materials._30}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_77.geometry}
          material={materials.TiltAWhirlSign}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_78.geometry}
          material={materials._26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_79.geometry}
          material={materials._25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_80.geometry}
          material={materials._27}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_81.geometry}
          material={materials._DarkGoldenrod_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_82.geometry}
          material={materials.jean_blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_83.geometry}
          material={materials._Beige_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_84.geometry}
          material={materials._Brown_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_85.geometry}
          material={materials._Gray6_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_86.geometry}
          material={materials._Charcoal_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_87.geometry}
          material={materials._Black_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.park_88.geometry}
          material={materials._Metal_Aluminum_Anodized_4}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/parkguy.glb");
