import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Lights from "../components/Lights";
import Ground from "../components/Ground";
import Player from "../components/Player";
import React from "react";
import Objects from "../components/Objects";

const Modal = () => {
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 300,
        height: 200,
        background: "#FFF",
        borderRadius: 10,
        boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.5)",
        padding: 30,
      }}
    >
      <h1>MICRO WORLD</h1>
      <h2>Loading ...</h2>
      <span style={{ color: "#000", fontSize: 13 }}>
        5trozMCHhDADJTxqfrffhJFsYGr4Vsk2PwgbXXMBL4qW
      </span>
    </Html>
  );
};

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <Canvas>
        {loading && <Modal />}
        {!loading && (
          <>
            <Ground />
            <Objects />
            <Player />
            <Lights />
          </>
        )}
      </Canvas>
    </div>
  );
};

export default Home;
