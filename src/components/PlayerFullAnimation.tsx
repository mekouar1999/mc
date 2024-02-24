import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { AnimationClip } from "three";

// Rest of the code


type GLTFResult = GLTF & {
  nodes: {
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
  materials: {};
};

type ActionName =
  | "Couppied"
  | "dancemj"
  | "dancing"
  | "idle"
  | "juming"
  | "praying"
  | "running"
  | "walking";

type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function PlayerFullAnimationModel(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/models/animationfinale2.glb") as unknown as GLTFResult;
  const { actions } = useAnimations<AnimationClip>(animations, group);
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
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/animationfinale2.glb");
