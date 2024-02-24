
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    carrier: THREE.Mesh;
    starmoon: THREE.Mesh;
    dome: THREE.Mesh;
    floor_ceramic: THREE.Mesh;
    upper_ornament: THREE.Mesh;
    pillars: THREE.Mesh;
    roof: THREE.Mesh;
    fences: THREE.Mesh;
    floor_concrete: THREE.Mesh;
    roof_pattern: THREE.Mesh;
  };
  materials: {
    carrier: THREE.MeshStandardMaterial;
    starmoon: THREE.MeshStandardMaterial;
    dome: THREE.MeshStandardMaterial;
    floor_ceramic: THREE.MeshStandardMaterial;
    upper_ornament: THREE.MeshStandardMaterial;
    pillars: THREE.MeshStandardMaterial;
    roof: THREE.MeshStandardMaterial;
    fences: THREE.MeshStandardMaterial;
    floor_concrete: THREE.MeshStandardMaterial;
    roof_pattern: THREE.MeshStandardMaterial;
  };
};

export function MosqueModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/mosque.glb")  as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.carrier.geometry}
        material={materials.carrier}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.starmoon.geometry}
        material={materials.starmoon}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dome.geometry}
        material={materials.dome}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_ceramic.geometry}
        material={materials.floor_ceramic}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper_ornament.geometry}
        material={materials.upper_ornament}
        position={[0, 0.03, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillars.geometry}
        material={materials.pillars}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof.geometry}
        material={materials.roof}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fences.geometry}
        material={materials.fences}
        position={[0, 0.03, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_concrete.geometry}
        material={materials.floor_concrete}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof_pattern.geometry}
        material={materials.roof_pattern}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/mosque.glb");