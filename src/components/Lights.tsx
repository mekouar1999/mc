import { useRef } from "react";
import * as THREE from "three";

const Lights: React.FC = () => {
  const spotLightRef = useRef<THREE.SpotLight>(null);

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        ref={spotLightRef}
        position={[0, 110, 30]}
        angle={Math.PI / 4}
        penumbra={0.1}
        intensity={1}
        castShadow
      />
    </>
  );
};

export default Lights;
