import React from "react";
import { TreeModel } from "./Tree";
import { HouseModel } from "./House";
import { FinelModel } from "./finel";

const Objects = () => {
  const generateRandomPositions = () => {
    const treePositions = [];
    const housePositions = [];

    for (let i = 0; i < 300; i++) {
      const treeX = Math.random() * 1000 - 500;
      const treeZ = Math.random() * 1000 - 500;
      const treePosition = [treeX, 0, treeZ];

      treePositions.push(treePosition);

      const houseX = Math.random() * 1000 - 500;
      const houseZ = Math.random() * 1000 - 500;
      const housePosition = [houseX, 0, houseZ];

      housePositions.push(housePosition);
    }

    return { treePositions, housePositions };
  };

  const { treePositions, housePositions } = generateRandomPositions();

  return (
    <>
      {treePositions.map((position, index) => (
        <TreeModel castShadow receiveShadow
          position={position as [number, number, number]}
          key={`tree_${index}`}
        />
      ))}
      {housePositions.map((position, index) => (
        <HouseModel
          position={position as [number, number, number]}
          key={`house_${index}`}
        />
      ))}

      <FinelModel position={[-50, 70, 0]} />
      <FinelModel position={[350, 70, 0]} />
      <FinelModel position={[-450, 70, 0]} />

      <FinelModel position={[-50, 70, 300]} />
      <FinelModel position={[350, 70, 300]} />
      <FinelModel position={[-450, 70, 300]} />
    </>
  );
};

export default Objects;
