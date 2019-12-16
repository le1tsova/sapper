import React from "react";
import "./style.css";
import Cell from "./Cell";

export default function Game(props) {
  return props.matrix.map((line, index) => (
    <div className="board-row" key={index}>
      {line.map(elementCol => (
        <Cell
          value={elementCol.value}
          status={elementCol.status}
          id={elementCol.id}
          onClick={props.onClick}
          key={elementCol.id}
          onContextMenu={props.onContextMenu}
        />
      ))}
    </div>
  ));
}
