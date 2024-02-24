
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    hotel_1: THREE.Mesh;
    hotel_2: THREE.Mesh;
    hotel_3: THREE.Mesh;
    hotel_4: THREE.Mesh;
    hotel_5: THREE.Mesh;
    hotel_6: THREE.Mesh;
    hotel_7: THREE.Mesh;
    hotel_8: THREE.Mesh;
    hotel_9: THREE.Mesh;
    hotel_10: THREE.Mesh;
    hotel_11: THREE.Mesh;
    hotel_12: THREE.Mesh;
    hotel_13: THREE.Mesh;
    hotel_14: THREE.Mesh;
    hotel_15: THREE.Mesh;
  };
  materials: {
    _Beige_1: THREE.MeshPhysicalMaterial;
    _Black_1: THREE.MeshPhysicalMaterial;
    _Gray_Glass_: THREE.MeshPhysicalMaterial;
    M_0128_White: THREE.MeshPhysicalMaterial;
    FrontColor: THREE.MeshPhysicalMaterial;
    Wood_Floor_Dark: THREE.MeshPhysicalMaterial;
    Fencing_Metal_Straight: THREE.MeshPhysicalMaterial;
    tex2: THREE.MeshPhysicalMaterial;
    SearsTower_FacadeN1: THREE.MeshPhysicalMaterial;
    jean_blue: THREE.MeshPhysicalMaterial;
    Color_001: THREE.MeshPhysicalMaterial;
    Color_D10: THREE.MeshPhysicalMaterial;
    Stone_Masonry_Multi: THREE.MeshPhysicalMaterial;
    Water_Pool_Light: THREE.MeshPhysicalMaterial;
    Tile_Navy: THREE.MeshPhysicalMaterial;
  };
};

export function HotelModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/hotel.glb")  as unknown as GLTFResult;;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_1.geometry}
          material={materials._Beige_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_2.geometry}
          material={materials._Black_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_3.geometry}
          material={materials._Gray_Glass_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_4.geometry}
          material={materials.M_0128_White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_5.geometry}
          material={materials.FrontColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_6.geometry}
          material={materials.Wood_Floor_Dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_7.geometry}
          material={materials.Fencing_Metal_Straight}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_8.geometry}
          material={materials.tex2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_9.geometry}
          material={materials.SearsTower_FacadeN1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_10.geometry}
          material={materials.jean_blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_11.geometry}
          material={materials.Color_001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_12.geometry}
          material={materials.Color_D10}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_13.geometry}
          material={materials.Stone_Masonry_Multi}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_14.geometry}
          material={materials.Water_Pool_Light}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hotel_15.geometry}
          material={materials.Tile_Navy}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/hotel.glb");