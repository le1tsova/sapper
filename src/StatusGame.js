import React from "react";

const FACES = { play: "🙂", win: "😎", lose: "💀" };

export default function StatusGame(props) {
  return (
    <div className="game-panel">
      <button className="button__new-game" onClick={props.onClick}>
        New Game
      </button>
      <p className="face">{FACES[props.status]}</p>
    </div>
  );
}
