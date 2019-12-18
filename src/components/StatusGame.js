import React from "react";

const FACES = { play: "🙂", win: "😎", lose: "💀" };

export default function StatusGame(props) {
  return <p className="face">{FACES[props.status] || "???"}</p>;
}
