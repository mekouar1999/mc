
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    casinooo_1: THREE.Mesh;
    casinooo_2: THREE.Mesh;
    casinooo_3: THREE.Mesh;
    casinooo_4: THREE.Mesh;
    casinooo_5: THREE.Mesh;
    casinooo_6: THREE.Mesh;
    casinooo_7: THREE.Mesh;
    casinooo_8: THREE.Mesh;
    casinooo_9: THREE.Mesh;
    casinooo_10: THREE.Mesh;
    casinooo_11: THREE.Mesh;
    casinooo_12: THREE.Mesh;
    casinooo_13: THREE.Mesh;
    casinooo_14: THREE.Mesh;
    casinooo_15: THREE.Mesh;
    casinooo_16: THREE.Mesh;
    casinooo_17: THREE.Mesh;
    casinooo_18: THREE.Mesh;
    casinooo_19: THREE.Mesh;
    casinooo_20: THREE.Mesh;
    casinooo_21: THREE.Mesh;
    casinooo_22: THREE.Mesh;
    casinooo_23: THREE.Mesh;
    casinooo_24: THREE.Mesh;
    casinooo_25: THREE.Mesh;
    casinooo_26: THREE.Mesh;
    casinooo_27: THREE.Mesh;
    casinooo_28: THREE.Mesh;
    casinooo_29: THREE.Mesh;
    casinooo_30: THREE.Mesh;
    casinooo_31: THREE.Mesh;
    casinooo_32: THREE.Mesh;
    casinooo_33: THREE.Mesh;
    casinooo_34: THREE.Mesh;
  };
  materials: {
    _Metal_Corrogated_Shiny_3: THREE.MeshPhysicalMaterial;
    _Carpet_Plush_Charcoal_1: THREE.MeshPhysicalMaterial;
    FrontColor: THREE.MeshPhysicalMaterial;
    Color_002: THREE.MeshPhysicalMaterial;
    _Color_006_1: THREE.MeshPhysicalMaterial;
    Color_009: THREE.MeshPhysicalMaterial;
    Color_G06: THREE.MeshPhysicalMaterial;
    Color_D01: THREE.MeshPhysicalMaterial;
    Color_I06: THREE.MeshPhysicalMaterial;
    M_1: THREE.MeshPhysicalMaterial;
    M_2: THREE.MeshPhysicalMaterial;
    Wood_Grain_Stain: THREE.MeshPhysicalMaterial;
    Color_A25: THREE.MeshPhysicalMaterial;
    _Translucent_Glass_Gray_2: THREE.MeshPhysicalMaterial;
    Color_B24: THREE.MeshPhysicalMaterial;
    Color_F16: THREE.MeshPhysicalMaterial;
    Color_D04: THREE.MeshPhysicalMaterial;
    Color_D05: THREE.MeshPhysicalMaterial;
    Color_C24: THREE.MeshPhysicalMaterial;
    _Wood_Cherry_Original_1: THREE.MeshPhysicalMaterial;
    Color_A02: THREE.MeshPhysicalMaterial;
    Color_000: THREE.MeshPhysicalMaterial;
    Color_C08: THREE.MeshPhysicalMaterial;
    Color_C04: THREE.MeshPhysicalMaterial;
    Color_A01: THREE.MeshPhysicalMaterial;
    Color_B13: THREE.MeshPhysicalMaterial;
    _Charcoal_: THREE.MeshPhysicalMaterial;
    _Seashell_: THREE.MeshPhysicalMaterial;
    Color_004: THREE.MeshPhysicalMaterial;
    _Color_008_1: THREE.MeshPhysicalMaterial;
    _Gray_Glass_1: THREE.MeshPhysicalMaterial;
    Roofing_Metal_Standing_Seam_Red: THREE.MeshPhysicalMaterial;
    Color_D03: THREE.MeshPhysicalMaterial;
    Concrete_Stamped_Ashlar: THREE.MeshPhysicalMaterial;
  };
};

export function CasinoModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/casinooo.glb")  as unknown as GLTFResult;;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 3.06]}>
       
       
      <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_1 as THREE.Mesh).geometry}
          material={materials._Metal_Corrogated_Shiny_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_2 as THREE.Mesh).geometry}
          material={materials._Carpet_Plush_Charcoal_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_3 as THREE.Mesh).geometry}
          material={materials.FrontColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_4 as THREE.Mesh).geometry}
          material={materials.Color_002}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_5 as THREE.Mesh).geometry}
          material={materials._Color_006_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_6 as THREE.Mesh).geometry}
          material={materials.Color_009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_7 as THREE.Mesh).geometry}
          material={materials.Color_G06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_8 as THREE.Mesh).geometry}
          material={materials.Color_D01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_9 as THREE.Mesh).geometry}
          material={materials.Color_I06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_10 as THREE.Mesh).geometry}
          material={materials.M_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_11 as THREE.Mesh).geometry}
          material={materials.M_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_12 as THREE.Mesh).geometry}
          material={materials.Wood_Grain_Stain}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_13 as THREE.Mesh).geometry}
          material={materials.Color_A25}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_14 as THREE.Mesh).geometry}
          material={materials._Translucent_Glass_Gray_2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_15 as THREE.Mesh).geometry}
          material={materials.Color_B24}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_16 as THREE.Mesh).geometry}
          material={materials.Color_F16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_17 as THREE.Mesh).geometry}
          material={materials.Color_D04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_18 as THREE.Mesh).geometry}
          material={materials.Color_D05}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_19 as THREE.Mesh).geometry}
          material={materials.Color_C24}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_20 as THREE.Mesh).geometry}
          material={materials._Wood_Cherry_Original_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_21 as THREE.Mesh).geometry}
          material={materials.Color_A02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_22 as THREE.Mesh).geometry}
          material={materials.Color_000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_23 as THREE.Mesh).geometry}
          material={materials.Color_C08}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_24 as THREE.Mesh).geometry}
          material={materials.Color_C04}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_25 as THREE.Mesh).geometry}
          material={materials.Color_A01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_26 as THREE.Mesh).geometry}
          material={materials.Color_B13}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_27 as THREE.Mesh).geometry}
          material={materials._Charcoal_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_28 as THREE.Mesh).geometry}
          material={materials._Seashell_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_29 as THREE.Mesh).geometry}
          material={materials.Color_004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_30 as THREE.Mesh).geometry}
          material={materials._Color_008_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_31 as THREE.Mesh).geometry}
          material={materials._Gray_Glass_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_32 as THREE.Mesh).geometry}
          material={materials.Roofing_Metal_Standing_Seam_Red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_33 as THREE.Mesh).geometry}
          material={materials.Color_D03}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.casinooo_34 as THREE.Mesh).geometry}
          material={materials.Concrete_Stamped_Ashlar}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/casinooo.glb");
