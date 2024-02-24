

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube005: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane007: THREE.Mesh;
    Plane008: THREE.Mesh;
    Plane009: THREE.Mesh;
    rock001: THREE.Mesh;
    rock002: THREE.Mesh;
    Plane010: THREE.Mesh;
    Plane012: THREE.Mesh;
    Plane013: THREE.Mesh;
    Plane014: THREE.Mesh;
    Plane015: THREE.Mesh;
    Plane016: THREE.Mesh;
    Plane017: THREE.Mesh;
    Plane011: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Plane018: THREE.Mesh;
    Plane019: THREE.Mesh;
    Plane020: THREE.Mesh;
    Plane021: THREE.Mesh;
    Plane022: THREE.Mesh;
    Plane023: THREE.Mesh;
    Plane024: THREE.Mesh;
    Plane025: THREE.Mesh;
    Plane026: THREE.Mesh;
    Plane027: THREE.Mesh;
    Plane028: THREE.Mesh;
    Plane029: THREE.Mesh;
    Plane030: THREE.Mesh;
    Plane031: THREE.Mesh;
    Plane032: THREE.Mesh;
    Plane033: THREE.Mesh;
    Plane034: THREE.Mesh;
    Plane035: THREE.Mesh;
    Plane036: THREE.Mesh;
    Plane037: THREE.Mesh;
    Plane038: THREE.Mesh;
    Plane039: THREE.Mesh;
    Plane040: THREE.Mesh;
    Plane041: THREE.Mesh;
    Plane042: THREE.Mesh;
    Plane043: THREE.Mesh;
    Plane044: THREE.Mesh;
    Plane045: THREE.Mesh;
    Plane046: THREE.Mesh;
    Plane047: THREE.Mesh;
    Plane048: THREE.Mesh;
    Plane049: THREE.Mesh;
    Plane050: THREE.Mesh;
    Plane051: THREE.Mesh;
    Plane052: THREE.Mesh;
    Plane053: THREE.Mesh;
    Plane054: THREE.Mesh;
    Plane055: THREE.Mesh;
    Plane056: THREE.Mesh;
    Plane057: THREE.Mesh;
    Plane058: THREE.Mesh;
    Plane059: THREE.Mesh;
    Plane060: THREE.Mesh;
    Plane061: THREE.Mesh;
    Plane062: THREE.Mesh;
    Plane063: THREE.Mesh;
    Plane064: THREE.Mesh;
    Plane065: THREE.Mesh;
    Plane066: THREE.Mesh;
    Plane067: THREE.Mesh;
    Plane068: THREE.Mesh;
    Plane069: THREE.Mesh;
    Plane070: THREE.Mesh;
    Plane071: THREE.Mesh;
    Plane072: THREE.Mesh;
    Plane073: THREE.Mesh;
    Plane074: THREE.Mesh;
    Plane075: THREE.Mesh;
    Plane076: THREE.Mesh;
    Plane077: THREE.Mesh;
    Plane078: THREE.Mesh;
    Plane079: THREE.Mesh;
    Plane080: THREE.Mesh;
    Plane081: THREE.Mesh;
    Plane082: THREE.Mesh;
    Plane083: THREE.Mesh;
    rock003: THREE.Mesh;
    rock004: THREE.Mesh;
    Plane084: THREE.Mesh;
    Plane085: THREE.Mesh;
    Plane086: THREE.Mesh;
    Plane087: THREE.Mesh;
    Plane088: THREE.Mesh;
    Plane089: THREE.Mesh;
    Plane090: THREE.Mesh;
    Plane091: THREE.Mesh;
    Plane092: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Icosphere: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Icosphere001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Icosphere002: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Icosphere003: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Icosphere004: THREE.Mesh;
    Icosphere005: THREE.Mesh;
    Icosphere006: THREE.Mesh;
    Icosphere007: THREE.Mesh;
    Icosphere008: THREE.Mesh;
    Icosphere009: THREE.Mesh;
    Icosphere010: THREE.Mesh;
    Icosphere011: THREE.Mesh;
    Icosphere012: THREE.Mesh;
    Icosphere013: THREE.Mesh;
    Icosphere014: THREE.Mesh;
    Icosphere015: THREE.Mesh;
    Icosphere016: THREE.Mesh;
    Icosphere017: THREE.Mesh;
    Icosphere018: THREE.Mesh;
    rock005: THREE.Mesh;
    rock006: THREE.Mesh;
    rock007: THREE.Mesh;
    rock008: THREE.Mesh;
    rock009: THREE.Mesh;
    rock010: THREE.Mesh;
    Plane094: THREE.Mesh;
    Plane095: THREE.Mesh;
    Plane096: THREE.Mesh;
    Plane097: THREE.Mesh;
    Plane098: THREE.Mesh;
    Icosphere019: THREE.Mesh;
    Icosphere020: THREE.Mesh;
    Icosphere021: THREE.Mesh;
    Icosphere022: THREE.Mesh;
    Icosphere023: THREE.Mesh;
    Icosphere024: THREE.Mesh;
    Icosphere025: THREE.Mesh;
    Icosphere026: THREE.Mesh;
    Plane100: THREE.Mesh;
    Plane101: THREE.Mesh;
    Plane102: THREE.Mesh;
    Plane103: THREE.Mesh;
    Plane104: THREE.Mesh;
    Plane105: THREE.Mesh;
    Plane099: THREE.Mesh;
    Plane106: THREE.Mesh;
    Plane107: THREE.Mesh;
    Plane108: THREE.Mesh;
    Plane109: THREE.Mesh;
    Plane110: THREE.Mesh;
    Plane111: THREE.Mesh;
    Plane112: THREE.Mesh;
  };
  materials: {
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshPhysicalMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.022"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshPhysicalMaterial;
  };
};

export function MaisonplusModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/maisonplus.glb") as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0.28, -0.02, -0.57]} scale={[0.72, 0.58, 0.85]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.011"]}
        position={[0.28, -0.02, -0.57]}
        scale={[0.72, 0.58, 0.95]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.014"]}
        position={[0.81, 0.7, -1.06]}
        scale={[0.09, 0.14, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[0.7, 0.25, -1.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.25, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.001"]}
        position={[0.7, 0.25, -1.4]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.01, 0.25, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.001"]}
        position={[-0.14, 0.25, -1.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.25, 0.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.001"]}
        position={[-0.13, 0.25, -1.4]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.01, 0.25, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.001"]}
        position={[0.16, -0.27, -1.43]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[0.01, 0.04, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.001"]}
        position={[0.13, -0.28, -1.4]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.01, 0.02, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials["Material.001"]}
        position={[0.98, 0.22, -1.05]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.01, 0.31, 0.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials["Material.001"]}
        position={[0.98, 0.22, -1.05]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.01, 0.31, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.001"]}
        position={[0.97, 0.22, -0.19]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.01, 0.31, 0.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials["Material.001"]}
        position={[0.97, 0.22, -0.18]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.01, 0.31, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock001.geometry}
        material={materials["Material.015"]}
        position={[-1.11, -0.62, -2.28]}
        rotation={[-0.06, -0.48, 0.68]}
        scale={[0.07, 0.08, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock002.geometry}
        material={materials["Material.015"]}
        position={[-1.18, -0.64, -2.27]}
        rotation={[0.59, 0.69, 0.37]}
        scale={[0.09, 0.09, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials["Material.022"]}
        position={[-0.66, -0.82, -0.94]}
        scale={[1.94, 2.55, 2.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials["Material.016"]}
        position={[0.72, -0.61, -1.96]}
        rotation={[2.97, 1.46, 1.94]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials["Material.016"]}
        position={[0.68, -0.61, -1.96]}
        rotation={[0.16, 1.14, -1.51]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["Material.016"]}
        position={[0.75, -0.61, -1.98]}
        rotation={[-3.03, 0.98, 1.77]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials["Material.016"]}
        position={[1.06, -0.63, -2.04]}
        rotation={[0.67, 1.54, -2.04]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials["Material.016"]}
        position={[1.02, -0.63, -2.05]}
        rotation={[0.12, 1.01, -1.47]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials["Material.016"]}
        position={[1.1, -0.63, -2.05]}
        rotation={[-3, 1.12, 1.74]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials["Material.008"]}
        position={[-0.66, -0.8, -0.94]}
        scale={[1.91, 2.51, 1.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.005"]}
        position={[0.28, -0.02, -0.57]}
        scale={[0.72, 0.58, 0.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.005"]}
        position={[0.28, -0.02, -0.57]}
        scale={[0.72, 0.58, 0.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.005"]}
        position={[0.28, -0.02, -0.57]}
        scale={[0.72, 0.58, 0.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.005"]}
        position={[0.28, -0.02, -0.57]}
        scale={[0.72, 0.58, 0.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.001"]}
        position={[0.28, -0.02, -0.57]}
        scale={[0.72, 0.58, 0.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.001"]}
        position={[0.28, -0.02, -0.57]}
        scale={[0.72, 0.58, 0.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={materials["Material.016"]}
        position={[0.55, -0.61, -2.33]}
        rotation={[0.12, 1.4, -1.49]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={materials["Material.016"]}
        position={[0.52, -0.61, -2.35]}
        rotation={[0.1, 0.86, -1.45]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials["Material.016"]}
        position={[0.6, -0.61, -2.34]}
        rotation={[-2.93, 1.26, 1.67]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials["Material.016"]}
        position={[0.77, -0.63, -2.74]}
        rotation={[0.07, 1.27, -1.44]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials["Material.016"]}
        position={[0.74, -0.63, -2.76]}
        rotation={[0.09, 0.73, -1.43]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane023.geometry}
        material={materials["Material.016"]}
        position={[0.82, -0.63, -2.74]}
        rotation={[-2.78, 1.39, 1.52]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={materials["Material.016"]}
        position={[-1.16, -0.61, -1.95]}
        rotation={[2.98, 1.45, 1.92]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={materials["Material.016"]}
        position={[-1.2, -0.61, -1.96]}
        rotation={[0.16, 1.15, -1.52]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials["Material.016"]}
        position={[-1.12, -0.61, -1.97]}
        rotation={[-3.03, 0.97, 1.78]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials["Material.016"]}
        position={[-0.86, -0.63, -2.33]}
        rotation={[0.99, 1.55, -2.36]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={materials["Material.016"]}
        position={[-0.9, -0.63, -2.34]}
        rotation={[0.12, 1.02, -1.48]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={materials["Material.016"]}
        position={[-0.82, -0.63, -2.35]}
        rotation={[-3, 1.11, 1.74]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={materials["Material.016"]}
        position={[-1.75, -0.61, -1.64]}
        rotation={[0.21, 1.48, -1.59]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane031.geometry}
        material={materials["Material.016"]}
        position={[-1.78, -0.61, -1.65]}
        rotation={[0.11, 0.94, -1.46]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane032.geometry}
        material={materials["Material.016"]}
        position={[-1.7, -0.61, -1.65]}
        rotation={[-2.97, 1.18, 1.71]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane033.geometry}
        material={materials["Material.016"]}
        position={[-1.33, -0.63, -1.54]}
        rotation={[0.09, 1.34, -1.46]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane034.geometry}
        material={materials["Material.016"]}
        position={[-1.37, -0.63, -1.56]}
        rotation={[0.09, 0.81, -1.44]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane035.geometry}
        material={materials["Material.016"]}
        position={[-1.29, -0.63, -1.55]}
        rotation={[-2.89, 1.32, 1.62]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane036.geometry}
        material={materials["Material.016"]}
        position={[-1.71, -0.61, -2.13]}
        rotation={[0.11, 1.39, -1.49]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane037.geometry}
        material={materials["Material.016"]}
        position={[-1.74, -0.61, -2.15]}
        rotation={[0.1, 0.85, -1.45]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane038.geometry}
        material={materials["Material.016"]}
        position={[-1.67, -0.61, -2.14]}
        rotation={[-2.93, 1.27, 1.66]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane039.geometry}
        material={materials["Material.016"]}
        position={[-1.29, -0.63, -2.42]}
        rotation={[0.06, 1.26, -1.44]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane040.geometry}
        material={materials["Material.016"]}
        position={[-1.32, -0.63, -2.44]}
        rotation={[0.09, 0.72, -1.43]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane041.geometry}
        material={materials["Material.016"]}
        position={[-1.24, -0.63, -2.42]}
        rotation={[-2.76, 1.4, 1.49]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane042.geometry}
        material={materials["Material.016"]}
        position={[-1.39, -0.61, -0.46]}
        rotation={[2.98, 1.45, 1.92]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane043.geometry}
        material={materials["Material.016"]}
        position={[-1.43, -0.61, -0.47]}
        rotation={[0.16, 1.15, -1.52]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane044.geometry}
        material={materials["Material.016"]}
        position={[-1.37, -0.59, -0.48]}
        rotation={[-3.03, 0.97, 1.78]}
        scale={[0.08, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane045.geometry}
        material={materials["Material.016"]}
        position={[-1.09, -0.63, -0.84]}
        rotation={[0.99, 1.55, -2.36]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane046.geometry}
        material={materials["Material.016"]}
        position={[-1.13, -0.63, -0.85]}
        rotation={[0.12, 1.02, -1.48]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane047.geometry}
        material={materials["Material.016"]}
        position={[-1.05, -0.63, -0.85]}
        rotation={[-3, 1.11, 1.74]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane048.geometry}
        material={materials["Material.016"]}
        position={[-1.98, -0.61, -0.14]}
        rotation={[0.21, 1.48, -1.59]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={materials["Material.016"]}
        position={[-2.01, -0.61, -0.16]}
        rotation={[0.11, 0.94, -1.46]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane050.geometry}
        material={materials["Material.016"]}
        position={[-1.93, -0.61, -0.16]}
        rotation={[-2.97, 1.18, 1.71]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane051.geometry}
        material={materials["Material.016"]}
        position={[-1.56, -0.63, -0.05]}
        rotation={[0.09, 1.34, -1.46]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane052.geometry}
        material={materials["Material.016"]}
        position={[-1.6, -0.63, -0.07]}
        rotation={[0.09, 0.81, -1.44]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane053.geometry}
        material={materials["Material.016"]}
        position={[-1.52, -0.63, -0.06]}
        rotation={[-2.89, 1.32, 1.62]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane054.geometry}
        material={materials["Material.016"]}
        position={[-1.94, -0.61, -0.64]}
        rotation={[0.11, 1.39, -1.49]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane055.geometry}
        material={materials["Material.016"]}
        position={[-1.97, -0.61, -0.65]}
        rotation={[0.1, 0.85, -1.45]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane056.geometry}
        material={materials["Material.016"]}
        position={[-1.9, -0.61, -0.65]}
        rotation={[-2.93, 1.27, 1.66]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane057.geometry}
        material={materials["Material.016"]}
        position={[-1.51, -0.63, -0.93]}
        rotation={[0.06, 1.26, -1.44]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane058.geometry}
        material={materials["Material.016"]}
        position={[-1.55, -0.63, -0.95]}
        rotation={[0.09, 0.72, -1.43]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane059.geometry}
        material={materials["Material.016"]}
        position={[-1.47, -0.63, -0.93]}
        rotation={[-2.76, 1.4, 1.49]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane060.geometry}
        material={materials["Material.016"]}
        position={[-1.83, -0.61, -2.26]}
        rotation={[2.98, 1.45, 1.92]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane061.geometry}
        material={materials["Material.016"]}
        position={[-1.86, -0.61, -2.27]}
        rotation={[0.16, 1.15, -1.52]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane062.geometry}
        material={materials["Material.016"]}
        position={[-1.79, -0.61, -2.28]}
        rotation={[-3.03, 0.97, 1.78]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane063.geometry}
        material={materials["Material.016"]}
        position={[-1.53, -0.63, -2.64]}
        rotation={[0.99, 1.55, -2.36]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane064.geometry}
        material={materials["Material.016"]}
        position={[-1.57, -0.63, -2.66]}
        rotation={[0.12, 1.02, -1.48]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane065.geometry}
        material={materials["Material.016"]}
        position={[-1.49, -0.63, -2.66]}
        rotation={[-3, 1.11, 1.74]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane066.geometry}
        material={materials["Material.016"]}
        position={[-2.41, -0.61, -1.95]}
        rotation={[0.21, 1.48, -1.59]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane067.geometry}
        material={materials["Material.016"]}
        position={[-2.45, -0.61, -1.96]}
        rotation={[0.11, 0.94, -1.46]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane068.geometry}
        material={materials["Material.016"]}
        position={[-2.37, -0.61, -1.96]}
        rotation={[-2.97, 1.18, 1.71]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane069.geometry}
        material={materials["Material.016"]}
        position={[-2, -0.63, -1.85]}
        rotation={[0.09, 1.34, -1.46]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane070.geometry}
        material={materials["Material.016"]}
        position={[-2.03, -0.63, -1.87]}
        rotation={[0.09, 0.81, -1.44]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane071.geometry}
        material={materials["Material.016"]}
        position={[-1.96, -0.63, -1.86]}
        rotation={[-2.89, 1.32, 1.62]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane072.geometry}
        material={materials["Material.016"]}
        position={[-2.37, -0.61, -2.37]}
        rotation={[0.11, 1.39, -1.49]}
        scale={[0.09, 0.05, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane073.geometry}
        material={materials["Material.016"]}
        position={[-2.41, -0.61, -2.4]}
        rotation={[0.1, 0.85, -1.45]}
        scale={[0.09, 0.05, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane074.geometry}
        material={materials["Material.016"]}
        position={[-2.33, -0.61, -2.39]}
        rotation={[-2.93, 1.27, 1.66]}
        scale={[0.09, 0.05, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane075.geometry}
        material={materials["Material.016"]}
        position={[-1.95, -0.63, -2.73]}
        rotation={[0.06, 1.26, -1.44]}
        scale={[0.09, 0.05, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane076.geometry}
        material={materials["Material.016"]}
        position={[-1.98, -0.63, -2.76]}
        rotation={[0.09, 0.72, -1.43]}
        scale={[0.09, 0.05, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane077.geometry}
        material={materials["Material.016"]}
        position={[-1.91, -0.63, -2.74]}
        rotation={[-2.76, 1.4, 1.49]}
        scale={[0.09, 0.05, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane078.geometry}
        material={materials["Material.016"]}
        position={[-2.09, -0.61, -1.23]}
        rotation={[0.34, 1.51, -1.72]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane079.geometry}
        material={materials["Material.016"]}
        position={[-2.13, -0.61, -1.25]}
        rotation={[0.12, 0.98, -1.47]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane080.geometry}
        material={materials["Material.016"]}
        position={[-2.05, -0.61, -1.25]}
        rotation={[-2.99, 1.15, 1.73]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane081.geometry}
        material={materials["Material.016"]}
        position={[-2.35, -0.63, -0.85]}
        rotation={[0.05, 1.17, -1.42]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane082.geometry}
        material={materials["Material.016"]}
        position={[-2.38, -0.63, -0.88]}
        rotation={[0.08, 0.63, -1.42]}
        scale={[0.09, 0.05, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane083.geometry}
        material={materials["Material.016"]}
        position={[-2.31, -0.63, -0.85]}
        rotation={[-2.4, 1.48, 1.13]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock003.geometry}
        material={materials["Material.015"]}
        position={[-1.58, -0.62, -2.71]}
        rotation={[-0.06, -0.48, 0.68]}
        scale={[0.07, 0.08, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock004.geometry}
        material={materials["Material.015"]}
        position={[-1.65, -0.64, -2.7]}
        rotation={[0.59, 0.69, 0.37]}
        scale={[0.09, 0.09, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane084.geometry}
        material={materials["Material.016"]}
        position={[0.84, -0.63, -2.48]}
        rotation={[0.67, 1.54, -2.04]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane085.geometry}
        material={materials["Material.016"]}
        position={[0.8, -0.63, -2.5]}
        rotation={[0.12, 1.01, -1.47]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane086.geometry}
        material={materials["Material.016"]}
        position={[0.88, -0.63, -2.5]}
        rotation={[-3, 1.12, 1.74]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane087.geometry}
        material={materials["Material.016"]}
        position={[-0.91, -0.63, -1.09]}
        rotation={[0.09, 1.34, -1.46]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane088.geometry}
        material={materials["Material.016"]}
        position={[-0.94, -0.63, -1.11]}
        rotation={[0.09, 0.81, -1.44]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane089.geometry}
        material={materials["Material.016"]}
        position={[-0.86, -0.63, -1.1]}
        rotation={[-2.89, 1.32, 1.62]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane090.geometry}
        material={materials["Material.016"]}
        position={[-0.66, -0.63, -0.38]}
        rotation={[0.99, 1.55, -2.36]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane091.geometry}
        material={materials["Material.016"]}
        position={[-0.7, -0.63, -0.4]}
        rotation={[0.12, 1.02, -1.48]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane092.geometry}
        material={materials["Material.016"]}
        position={[-0.63, -0.63, -0.4]}
        rotation={[-3, 1.11, 1.74]}
        scale={[0.09, 0.04, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.001"]}
        position={[-1.16, -0.34, -1.28]}
        scale={[0.05, 0.32, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials["Material.016"]}
        position={[-1.15, -0.03, -1.28]}
        scale={[0.26, 0.25, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.001"]}
        position={[-1.9, -0.34, -1.67]}
        scale={[0.05, 0.32, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials["Material.016"]}
        position={[-1.9, -0.03, -1.67]}
        scale={[0.26, 0.25, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.001"]}
        position={[-2.16, -0.34, -0.06]}
        scale={[0.05, 0.32, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={materials["Material.016"]}
        position={[-2.16, -0.03, -0.06]}
        scale={[0.26, 0.25, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.001"]}
        position={[-1.93, -0.34, -2.5]}
        scale={[0.05, 0.32, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={materials["Material.016"]}
        position={[-1.93, -0.03, -2.5]}
        scale={[0.26, 0.25, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.001"]}
        position={[-0.91, -0.34, -2.78]}
        scale={[0.05, 0.32, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={materials["Material.016"]}
        position={[-0.91, -0.03, -2.78]}
        scale={[0.26, 0.25, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={materials["Material.016"]}
        position={[0.69, -0.58, -1.62]}
        scale={[0.12, 0.11, 0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere006.geometry}
        material={materials["Material.016"]}
        position={[0.8, -0.58, -1.62]}
        scale={[0.1, 0.1, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={materials["Material.016"]}
        position={[0.77, -0.6, -1.74]}
        scale={[0.07, 0.06, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008.geometry}
        material={materials["Material.016"]}
        position={[1.01, -0.58, -2.41]}
        scale={[0.1, 0.1, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere009.geometry}
        material={materials["Material.016"]}
        position={[1.11, -0.58, -2.41]}
        scale={[0.09, 0.09, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere010.geometry}
        material={materials["Material.016"]}
        position={[1.08, -0.6, -2.52]}
        scale={[0.06, 0.06, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere011.geometry}
        material={materials["Material.016"]}
        position={[0.87, -0.58, -2.28]}
        rotation={[0, -0.2, 0]}
        scale={[0.1, 0.1, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere012.geometry}
        material={materials["Material.016"]}
        position={[0.97, -0.58, -2.26]}
        rotation={[0, -0.2, 0]}
        scale={[0.09, 0.09, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere013.geometry}
        material={materials["Material.016"]}
        position={[0.87, -0.6, -2.41]}
        rotation={[0, -0.17, 0.01]}
        scale={[0.06, 0.06, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere014.geometry}
        material={materials["Material.016"]}
        position={[-0.58, -0.58, -2.41]}
        scale={[0.1, 0.1, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere015.geometry}
        material={materials["Material.016"]}
        position={[-0.48, -0.59, -2.32]}
        scale={[0.09, 0.09, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere016.geometry}
        material={materials["Material.016"]}
        position={[-0.72, -0.58, -2.28]}
        rotation={[0, -0.2, 0]}
        scale={[0.1, 0.1, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere017.geometry}
        material={materials["Material.016"]}
        position={[-0.62, -0.59, -2.26]}
        rotation={[0, -0.2, 0]}
        scale={[0.1, 0.11, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere018.geometry}
        material={materials["Material.016"]}
        position={[-0.72, -0.6, -2.41]}
        rotation={[0, -0.17, 0.01]}
        scale={[0.06, 0.06, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock005.geometry}
        material={materials["Material.015"]}
        position={[-1.11, -0.62, -1.69]}
        rotation={[-0.06, -0.48, 0.68]}
        scale={[0.07, 0.08, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock006.geometry}
        material={materials["Material.015"]}
        position={[-1.18, -0.64, -1.67]}
        rotation={[0.59, 0.69, 0.37]}
        scale={[0.09, 0.09, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock007.geometry}
        material={materials["Material.015"]}
        position={[0.62, -0.62, -2.12]}
        rotation={[-0.06, -0.48, 0.68]}
        scale={[0.07, 0.08, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock008.geometry}
        material={materials["Material.015"]}
        position={[0.55, -0.64, -2.1]}
        rotation={[0.59, 0.69, 0.37]}
        scale={[0.09, 0.09, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock009.geometry}
        material={materials["Material.015"]}
        position={[0.93, -0.62, -2.67]}
        rotation={[-0.06, -0.48, 0.68]}
        scale={[0.07, 0.08, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock010.geometry}
        material={materials["Material.015"]}
        position={[0.86, -0.64, -2.66]}
        rotation={[0.59, 0.69, 0.37]}
        scale={[0.09, 0.09, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane094.geometry}
        material={materials["Material.019"]}
        position={[0.26, -0.65, -1.66]}
        scale={[0.13, 0.21, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane095.geometry}
        material={materials["Material.019"]}
        position={[0.14, -0.65, -1.89]}
        scale={[0.13, 0.21, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane096.geometry}
        material={materials["Material.019"]}
        position={[0.23, -0.65, -2.15]}
        scale={[0.13, 0.21, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane097.geometry}
        material={materials["Material.019"]}
        position={[0.1, -0.65, -2.39]}
        scale={[0.13, 0.21, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane098.geometry}
        material={materials["Material.019"]}
        position={[0.29, -0.65, -2.62]}
        scale={[0.13, 0.21, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere019.geometry}
        material={materials["Material.016"]}
        position={[-0.83, -0.58, -1.49]}
        scale={[0.1, 0.1, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere020.geometry}
        material={materials["Material.016"]}
        position={[-0.73, -0.59, -1.4]}
        scale={[0.09, 0.09, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere021.geometry}
        material={materials["Material.016"]}
        position={[-0.96, -0.58, -1.36]}
        rotation={[0, -0.2, 0]}
        scale={[0.1, 0.1, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere022.geometry}
        material={materials["Material.016"]}
        position={[-0.87, -0.59, -1.34]}
        rotation={[0, -0.2, 0]}
        scale={[0.1, 0.11, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere023.geometry}
        material={materials["Material.016"]}
        position={[-1.84, -0.58, -1.15]}
        scale={[0.1, 0.1, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere024.geometry}
        material={materials["Material.016"]}
        position={[-1.74, -0.59, -1.06]}
        scale={[0.09, 0.09, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere025.geometry}
        material={materials["Material.016"]}
        position={[-1.97, -0.58, -1.02]}
        rotation={[0, -0.2, 0]}
        scale={[0.1, 0.1, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere026.geometry}
        material={materials["Material.016"]}
        position={[-1.87, -0.59, -1]}
        rotation={[0, -0.2, 0]}
        scale={[0.1, 0.11, 0.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane100.geometry}
        material={materials["Material.001"]}
        position={[1.2, -0.49, -2.89]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.03, -0.17, -0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane101.geometry}
        material={materials["Material.001"]}
        position={[1, -0.49, -2.89]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.03, -0.17, -0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane102.geometry}
        material={materials["Material.001"]}
        position={[1.23, -0.49, -2.73]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[-0.03, -0.17, -0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane103.geometry}
        material={materials["Material.001"]}
        position={[-2.52, -0.49, -2.73]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[-0.03, -0.17, -0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane104.geometry}
        material={materials["Material.001"]}
        position={[1.2, -0.49, 1.02]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.03, -0.17, -0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane105.geometry}
        material={materials["Material.001"]}
        position={[1, -0.49, 1.02]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-0.03, -0.17, -0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane099.geometry}
        material={materials["Material.001"]}
        position={[-0.68, -0.46, -2.89]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[1.86, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane106.geometry}
        material={materials["Material.001"]}
        position={[-0.68, -0.59, -2.89]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[1.88, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane107.geometry}
        material={materials["Material.001"]}
        position={[-2.53, -0.46, -1.01]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.88, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane108.geometry}
        material={materials["Material.001"]}
        position={[-2.53, -0.59, -1.01]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.88, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane109.geometry}
        material={materials["Material.001"]}
        position={[-0.68, -0.46, 1.02]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[1.86, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane110.geometry}
        material={materials["Material.001"]}
        position={[-0.68, -0.59, 1.02]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[1.88, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane111.geometry}
        material={materials["Material.001"]}
        position={[1.23, -0.46, -1.01]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.88, 0.25, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane112.geometry}
        material={materials["Material.001"]}
        position={[1.23, -0.59, -1.01]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.88, 0.25, 0.02]}
      />
    </group>
  );
}

useGLTF.preload("/models/maisonplus.glb");