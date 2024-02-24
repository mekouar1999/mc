import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

type GLTFResult = {
  nodes: {
    [name: string]: THREE.Object3D;
    Ch14: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
    Ctrl_Master: THREE.Bone;
    Ctrl_ArmPole_IK_Left: THREE.Bone;
    Ctrl_Hand_IK_Left: THREE.Bone;
    Ctrl_ArmPole_IK_Right: THREE.Bone;
    Ctrl_Hand_IK_Right: THREE.Bone;
    Ctrl_Foot_IK_Left: THREE.Bone;
    Ctrl_LegPole_IK_Left: THREE.Bone;
    Ctrl_Foot_IK_Right: THREE.Bone;
    Ctrl_LegPole_IK_Right: THREE.Bone;
  };
  materials: {
    [name: string]: THREE.Material;
    Ch14_Body: THREE.MeshPhysicalMaterial;
  };
  animations: THREE.AnimationClip[];
};

type GLTFActions = {
  [name: string]: THREE.AnimationMixer;
};

export function JoueurpModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("models/avatarr.glb") as unknown as GLTFResult;
  const mixer = new THREE.AnimationMixer(nodes.Ch14);
  const animationsClip: THREE.AnimationClip[] = animations;
  animationsClip.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <skinnedMesh
            name="Ch14"
            geometry={nodes.Ch14.geometry}
            material={materials.Ch14_Body}
            skeleton={nodes.Ch14.skeleton}
          />
        </group>
      </group>
    </group>
  );
}
useGLTF.preload("/models/avatarr.glb");
