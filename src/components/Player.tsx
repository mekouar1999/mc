import { useAnimations, useGLTF } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useInput } from "../hooks/useInput";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

type DirectionOffsetParams = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
};

const directionOffset = ({
  forward,
  backward,
  left,
  right,
}: DirectionOffsetParams) => {
  let directionOffset = 0; //w

  if (forward) {
    if (left) {
      directionOffset = Math.PI / 4; // w+a
    } else if (right) {
      directionOffset = -Math.PI / 4; //w+d
    }
  } else if (backward) {
    if (left) {
      directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
    } else if (right) {
      directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
    } else {
      directionOffset = Math.PI; // s
    }
  } else if (left) {
    directionOffset = Math.PI / 2;
  } else if (right) {
    directionOffset = -Math.PI / 2;
  }
  return directionOffset;
};

const Player = () => {
  const { gl } = useThree();

  const {
    forward,
    backward,
    left,
    right,
    jump,
    shift,
    dancing,
    praying,
    dancemj,
    Couppied,
  } = useInput();

  const model = useGLTF("./models/finale.glb");

  const { actions } = useAnimations(model.animations, model.scene);
  const currentAction = useRef("");

  const controlsRef = useRef<OrbitControls>();

  const camera = useThree((state) => state.camera);

  const updateCameraTarget = (moveX: number, moveZ: number) => {
    camera.position.x += moveX;
    camera.position.z += moveZ;
    cameraTarget.x = model.scene.position.x;
    cameraTarget.y = model.scene.position.y + 2;
    cameraTarget.z = model.scene.position.z;

    if (controlsRef.current) controlsRef.current.target = cameraTarget;
  };

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controlsRef.current = controls;
    controls.enableZoom = false;
    controls.minDistance = 0; // or set a specific minimum distance
    controls.maxDistance = 5; // set a maximum distance

    controls.minPolarAngle = 0; // Bloquer le bas
    controls.maxPolarAngle = Math.PI / 2; // Bloquer le haut

    return () => {
      controls.dispose();
    };
  }, [camera, gl.domElement]);

  useEffect(() => {
    let action = "";

    if (forward || backward || left || right) {
      action = "walking";

      if (shift) {
        action = "running";
      }
    } else if (jump) {
      action = "juming";
    } else if (praying) {
      action = "praying";
    } else if (dancemj) {
      action = "dancemj";
    } else if (Couppied) {
      action = "Couppied";
    } else if (dancing) {
      action = "dancing";
    } else {
      action = "idle";
    }

    if (currentAction.current != action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [
    forward,
    backward,
    left,
    right,
    jump,
    shift,
    praying,
    dancemj,
    Couppied,
    dancing,
    actions,
  ]);

  const controls = controlsRef.current;

  // Bloquer la rotation vers le haut ou vers le bas
  if (controls) {
    const { target } = controls;
    const cameraDirection = camera.position.clone().sub(target).normalize();
    const verticalAngle = Math.asin(cameraDirection.y);
    const minVerticalAngle = -Math.PI / 4; // Bloquer le bas
    const maxVerticalAngle = Math.PI / 4; // Bloquer le haut

    if (verticalAngle < minVerticalAngle) {
      cameraDirection.y = Math.sin(minVerticalAngle);
      camera.position.copy(target).add(cameraDirection);
      controls.update();
    } else if (verticalAngle > maxVerticalAngle) {
      cameraDirection.y = Math.sin(maxVerticalAngle);
      camera.position.copy(target).add(cameraDirection);
      controls.update();
    }
  }

  useFrame((state, delta) => {
    if (
      currentAction.current == "running" ||
      currentAction.current == "walking"
    ) {
      let angleYcameraDirection = Math.atan2(
        camera.position.x - model.scene.position.x,
        camera.position.z - model.scene.position.z
      );
      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right,
      });
      rotateQuarternion.setFromAxisAngle(
        rotateAngle,
        angleYcameraDirection + newDirectionOffset
      );
      model.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);
      const velocity = currentAction.current == "running" ? 21 : 7;
      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;

      model.scene.position.x += moveX;
      model.scene.position.z += moveZ;

      updateCameraTarget(moveX, moveZ);

      console.log(model.scene.position.x, model.scene.position.z);
    }
  });

  return (
      <>
        <group castShadow receiveShadow>
          <primitive object={model.scene} />
        </group>
      </>
    );
    
};

export default Player;
