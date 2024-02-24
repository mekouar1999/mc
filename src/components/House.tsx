import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    Cube001_4: THREE.Mesh;
  };
  materials: {
    home: THREE.MeshStandardMaterial;
    glass: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export function HouseModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/models/cartoon_home.glb") as unknown as GLTFResult;
  const actions = animations;
  useAnimations(actions, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Cube"
          position={[-0.04, 0.02, 0.08]}
          scale={[7.41, 0.08, 7.41]}
        >
          <mesh
            name="Cube001"
            castShadow
            receiveShadow
            geometry={(nodes.Cube001 as THREE.Mesh).geometry}
            material={materials.home}
          />
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={(nodes.Cube001_1 as THREE.Mesh).geometry}
            material={materials.glass}
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={(nodes.Cube001_2 as THREE.Mesh).geometry}
            material={materials.Material}
          />
          <mesh
            name="Cube001_3"
            castShadow
            receiveShadow
            geometry={(nodes.Cube001_3 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cube001_4"
            castShadow
            receiveShadow
            geometry={(nodes.Cube001_4 as THREE.Mesh).geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/cartoon_home.glb");
