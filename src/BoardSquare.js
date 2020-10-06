import React from "react";
import Square from "./Square";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import { canMoveKnight, moveKnight } from "./Game";

const Overlay = ({ backgroundColor }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 1,
        opacity: 0.5,
        backgroundColor,
      }}
    />
  );
};

export default function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1;
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    drop: () => moveKnight(x, y),
    canDrop: () => canMoveKnight(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  return (
    <div
      ref={drop}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay backgroundColor="red" />}
      {!isOver && canDrop && <Overlay backgroundColor="yellow" />}
      {isOver && canDrop && <Overlay backgroundColor="green" />}
    </div>
  );
}
