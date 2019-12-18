import React from "react";
import "../../src/style.css";
import { CELL_FLAGGET, CELL_OPENED } from "../consts";

export default function Cell(props) {
  return (
    <div className="square">
      {props.status === CELL_OPENED ? (
        props.value
      ) : (
        <button
          className="square__button"
          id={props.id}
          onClick={props.status === CELL_FLAGGET ? null : props.onClick}
          onContextMenu={props.onContextMenu}
        >
          {props.status === CELL_FLAGGET ? "☠️" : null}
        </button>
      )}
    </div>
  );
}
