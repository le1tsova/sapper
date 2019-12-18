import React from "react";
import "../../src/style.css";
import Cell from "./Cell";

export default function Game(props) {
  return props.matrix.map((line, index) => (
    <div className="board-row" key={index}>
      {line.map(elementCol => (
        <Cell
          {...elementCol}
          key={elementCol.id}
          onClick={props.onClick}
          onContextMenu={props.onContextMenu}
        />
      ))}
    </div>
  ));
}
