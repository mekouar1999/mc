
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    hotell_1: THREE.Mesh;
    hotell_2: THREE.Mesh;
    hotell_3: THREE.Mesh;
    hotell_4: THREE.Mesh;
    hotell_5: THREE.Mesh;
    hotell_6: THREE.Mesh;
    hotell_7: THREE.Mesh;
    hotell_8: THREE.Mesh;
    hotell_9: THREE.Mesh;
    hotell_10: THREE.Mesh;
    hotell_11: THREE.Mesh;
    hotell_12: THREE.Mesh;
    hotell_13: THREE.Mesh;
    hotell_14: THREE.Mesh;
    hotell_15: THREE.Mesh;
    hotell_16: THREE.Mesh;
    hotell_17: THREE.Mesh;
    hotell_18: THREE.Mesh;
    hotell_19: THREE.Mesh;
    hotell_20: THREE.Mesh;
    hotell_21: THREE.Mesh;
    hotell_22: THREE.Mesh;
    hotell_23: THREE.Mesh;
    hotell_24: THREE.Mesh;
    hotell_25: THREE.Mesh;
  };
  materials: {
    Color_000: THREE.MeshPhysicalMaterial;
    Metal_Aluminum_Anodized: THREE.MeshPhysicalMaterial;
    Clear_CLUG4SB702: THREE.MeshPhysicalMaterial;
    sparrow: THREE.MeshPhysicalMaterial;
    Thermal___Moisture_Roofing___Siding_Panels_Metal_Standing_Seam_: THREE.MeshPhysicalMaterial;
    Asphalt_New: THREE.MeshPhysicalMaterial;
    _Water_Pool_Light_1: THREE.MeshPhysicalMaterial;
    Finishes_Ceilings_Acoustical_Tile_Exposed_Grid_2x2_Fissured_Whi: THREE.MeshPhysicalMaterial;
    Asphalt_Old: THREE.MeshPhysicalMaterial;
    Tile_Various_Tan: THREE.MeshPhysicalMaterial;
    Translucent_Glass_Blue: THREE.MeshPhysicalMaterial;
    WhiteWoman: THREE.MeshPhysicalMaterial;
    woman03_Billboard: THREE.MeshPhysicalMaterial;
    woman02_Billboard: THREE.MeshPhysicalMaterial;
    Man01_Billboard: THREE.MeshPhysicalMaterial;
    Color_A02: THREE.MeshPhysicalMaterial;
    Color_A10: THREE.MeshPhysicalMaterial;
    Color_C02: THREE.MeshPhysicalMaterial;
    Color_E01: THREE.MeshPhysicalMaterial;
    Color_F02: THREE.MeshPhysicalMaterial;
    Color_F16: THREE.MeshPhysicalMaterial;
    Color_H07: THREE.MeshPhysicalMaterial;
    Color_H16: THREE.MeshPhysicalMaterial;
    Color_I06: THREE.MeshPhysicalMaterial;
    FrontColor: THREE.MeshPhysicalMaterial;
  };
};

export function HotellModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/hotell.glb")  as unknown as GLTFResult;;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_1.geometry}
          material={materials.Color_000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_2.geometry}
          material={materials.Metal_Aluminum_Anodized}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_3.geometry}
          material={materials.Clear_CLUG4SB702}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_4.geometry}
          material={materials.sparrow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_5.geometry}
          material={
            materials.Thermal___Moisture_Roofing___Siding_Panels_Metal_Standing_Seam_
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_6.geometry}
          material={materials.Asphalt_New}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_7.geometry}
          material={materials._Water_Pool_Light_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_8.geometry}
          material={
            materials.Finishes_Ceilings_Acoustical_Tile_Exposed_Grid_2x2_Fissured_Whi
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_9.geometry}
          material={materials.Asphalt_Old}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_10.geometry}
          material={materials.Tile_Various_Tan}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_11.geometry}
          material={materials.Translucent_Glass_Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_12.geometry}
          material={materials.WhiteWoman}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_13.geometry}
          material={materials.woman03_Billboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_14.geometry}
          material={materials.woman02_Billboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_15.geometry}
          material={materials.Man01_Billboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_16.geometry}
          material={materials.Color_A02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_17.geometry}
          material={materials.Color_A10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_18.geometry}
          material={materials.Color_C02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_19.geometry}
          material={materials.Color_E01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_20.geometry}
          material={materials.Color_F02}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_21.geometry}
          material={materials.Color_F16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_22.geometry}
          material={materials.Color_H07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_23.geometry}
          material={materials.Color_H16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_24.geometry}
          material={materials.Color_I06}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotell_25.geometry}
          material={materials.FrontColor}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/hotell.glb");
