import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { cursorTo } from "readline";
import THREE from "three";

const PnjPlayer2 = () => {

    const model = useGLTF("./models/pnjentree22.glb");
    const { actions } = useAnimations(model.animations,model.scene);

    model.scene.position.set(18,0,-71)

    model.scene.scale.set(2,2,2)


     // add event listeners to a pnj player 




  
  
  
    console.log(model);
  
        useEffect(() => {

         actions?.idle2?.play();

        }, []);
  
    return <primitive object={model.scene} onClick={() => 



        
        console.log("Interaction with PNJ of the city")
        
    
    } />
  }


  export default PnjPlayer2
  