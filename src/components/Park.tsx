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
  };
  materials: {
    _65: THREE.MeshPhysicalMaterial;
    _66: THREE.MeshPhysicalMaterial;
    ["FrontColor.003"]: THREE.MeshPhysicalMaterial;
    _LightGray_: THREE.MeshPhysicalMaterial;
    Water_Sparkling: THREE.MeshPhysicalMaterial;
    Brick_Flemish_Stretcher_Dark: THREE.MeshPhysicalMaterial;
    water: THREE.MeshPhysicalMaterial;
    _14: THREE.MeshPhysicalMaterial;
    Color_D01: THREE.MeshPhysicalMaterial;
    _WarmGray3_: THREE.MeshPhysicalMaterial;
    _Brick_rough2_: THREE.MeshPhysicalMaterial;
    Fencing_Railing_Metal: THREE.MeshPhysicalMaterial;
    _Gray8_: THREE.MeshPhysicalMaterial;
    _GAF_Country_Estates_2: THREE.MeshPhysicalMaterial;
  };
};

export function ParkModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/park.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_1 as THREE.Mesh).geometry}
          material={materials._65}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_2 as THREE.Mesh).geometry}
          material={materials._66}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_3 as THREE.Mesh).geometry}
          material={materials["FrontColor.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_4 as THREE.Mesh).geometry}
          material={materials._LightGray_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_5 as THREE.Mesh).geometry}
          material={materials.Water_Sparkling}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_6 as THREE.Mesh).geometry}
          material={materials.Brick_Flemish_Stretcher_Dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_7 as THREE.Mesh).geometry}
          material={materials.water}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_8 as THREE.Mesh).geometry}
          material={materials._14}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_9 as THREE.Mesh).geometry}
          material={materials.Color_D01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_10 as THREE.Mesh).geometry}
          material={materials._WarmGray3_}
          />
          <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_11 as THREE.Mesh).geometry}
          material={materials._Brick_rough2_}
          />
          <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_12 as THREE.Mesh).geometry}
          material={materials.Fencing_Railing_Metal}
          />
          <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_13 as THREE.Mesh).geometry}
          material={materials._Gray8_}
          />
          <mesh
          castShadow
          receiveShadow
          geometry={(nodes.park_14 as THREE.Mesh).geometry}
          material={materials._GAF_Country_Estates_2}
          />
          </group>
          </group>
          );
          }
          
          useGLTF.preload("/models/park.glb");
