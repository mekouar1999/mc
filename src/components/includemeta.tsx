

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    objet_metaverse_1: THREE.Mesh;
    objet_metaverse_2: THREE.Mesh;
    objet_metaverse_3: THREE.Mesh;
    objet_metaverse_4: THREE.Mesh;
    objet_metaverse_5: THREE.Mesh;
    objet_metaverse_6: THREE.Mesh;
    objet_metaverse_7: THREE.Mesh;
    objet_metaverse_8: THREE.Mesh;
    objet_metaverse_9: THREE.Mesh;
    objet_metaverse_10: THREE.Mesh;
    objet_metaverse_11: THREE.Mesh;
    objet_metaverse_12: THREE.Mesh;
    objet_metaverse_13: THREE.Mesh;
    objet_metaverse_14: THREE.Mesh;
    objet_metaverse_15: THREE.Mesh;
    objet_metaverse_16: THREE.Mesh;
    objet_metaverse_17: THREE.Mesh;
    objet_metaverse_18: THREE.Mesh;
    objet_metaverse_19: THREE.Mesh;
    objet_metaverse_20: THREE.Mesh;
  };
  materials: {
    Mati_re: THREE.MeshPhysicalMaterial;
    FrontColor: THREE.MeshPhysicalMaterial;
    Mati_re7: THREE.MeshPhysicalMaterial;
    Mati_re6: THREE.MeshPhysicalMaterial;
    Capture_d_e_cran_2022_11_18_a__23_59_20: THREE.MeshPhysicalMaterial;
    Q1_2022: THREE.MeshPhysicalMaterial;
    Q1_2022__1_: THREE.MeshPhysicalMaterial;
    Q1_2022__2_: THREE.MeshPhysicalMaterial;
    dsds: THREE.MeshPhysicalMaterial;
    Q1_2022__3_: THREE.MeshPhysicalMaterial;
    M_4: THREE.MeshPhysicalMaterial;
    about: THREE.MeshPhysicalMaterial;
    M_5_removebg_preview: THREE.MeshPhysicalMaterial;
    M_4_removebg_preview: THREE.MeshPhysicalMaterial;
    M_3_removebg_preview: THREE.MeshPhysicalMaterial;
    M_2_removebg_preview: THREE.MeshPhysicalMaterial;
    M_1_removebg_preview: THREE.MeshPhysicalMaterial;
    M_6: THREE.MeshPhysicalMaterial;
    roadmap: THREE.MeshPhysicalMaterial;
    M_1: THREE.MeshPhysicalMaterial;
  };
};

export function IncludeModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/includemeta.glb")  as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_1.geometry}
          material={materials.Mati_re}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_2.geometry}
          material={materials.FrontColor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_3.geometry}
          material={materials.Mati_re7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_4.geometry}
          material={materials.Mati_re6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_5.geometry}
          material={materials.Capture_d_e_cran_2022_11_18_a__23_59_20}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_6.geometry}
          material={materials.Q1_2022}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_7.geometry}
          material={materials.Q1_2022__1_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_8.geometry}
          material={materials.Q1_2022__2_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_9.geometry}
          material={materials.dsds}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_10.geometry}
          material={materials.Q1_2022__3_}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_11.geometry}
          material={materials.M_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_12.geometry}
          material={materials.about}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_13.geometry}
          material={materials.M_5_removebg_preview}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_14.geometry}
          material={materials.M_4_removebg_preview}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_15.geometry}
          material={materials.M_3_removebg_preview}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_16.geometry}
          material={materials.M_2_removebg_preview}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_17.geometry}
          material={materials.M_1_removebg_preview}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_18.geometry}
          material={materials.M_6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_19.geometry}
          material={materials.roadmap}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.objet_metaverse_20.geometry}
          material={materials.M_1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/includemeta.glb");