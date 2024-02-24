import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

const CameraOrbitController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableZoom = false; // désactive le zoom
    controls.enablePan = false; // désactive le mouvement de panoramique (pan)
    controls.minPolarAngle = Math.PI / 3; // Limite l'angle vertical minimum à 60 degrés (bloque le bas)
    controls.maxPolarAngle = (5 * Math.PI) / 6; // Limite l'angle vertical maximum à 150 degrés (bloque le haut)

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

export default CameraOrbitController;
