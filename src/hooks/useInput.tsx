import { useEffect, useState } from "react";

type KeyMap = {
  [key: string]: string | undefined;
  ArrowUp: string;
  ArrowDown: string;
  ArrowLeft: string;
  ArrowRight: string;
  ShiftLeft: string;
  Space: string;
  KeyA: string;
  KeyS: string;
  KeyX: string;
  KeyW: string;
};

const keys: KeyMap = {
  ArrowUp: "forward",
  ArrowDown: "backward",
  ArrowLeft: "left",
  ArrowRight: "right",
  ShiftLeft: "shift",
  Space: "jump",
  KeyA: "dancing",
  KeyS: "praying",
  KeyX: "Couppied",
  KeyW: "dancemj",
};

export const useInput = () => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
    jump: false,
    dancing: false,
    praying: false,
    Couppied: false,
    dancemj: false,
  });

  const findKey = (key: string) => keys[key];

  useEffect(() => {
    const handleKeyDown = (e: { code: string; }) => {
      const keyToUpdate = findKey(e.code);
      if (keyToUpdate) {
        setInput((m) => ({ ...m, [keyToUpdate]: true }));
      }
    };

    const handleKeyUp = (e: { code: string; }) => {
      const keyToUpdate = findKey(e.code);
      if (keyToUpdate) {
        setInput((m) => ({ ...m, [keyToUpdate]: false }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return input;
};
