
const Ground: React.FC = () => {


    return (

        <>
                 <mesh rotation-x={Math.PI * -0.5} >
          <planeBufferGeometry args={[3000,3000]}/>
          <meshStandardMaterial color={'#458745'}/>

        </mesh>


</>

        
    )
}

export default Ground;

