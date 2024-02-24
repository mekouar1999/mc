import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const PnjWhales = () => {

    const model = useGLTF("./models/pnjwhales.glb");
    const { actions } = useAnimations(model.animations,model.scene);


    model.scene.position.set(-500,0,150)

    model.scene.scale.set(2,2,2)

  
  
  
    console.log(model);
  
        useEffect(() => {

          actions?.swipe?.play();

        }, []);
  
    return <primitive object={model.scene}/>
  }


  export default PnjWhales

  