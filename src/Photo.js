import React from "react";

export const Photo = props => (
  <div className="photo">
    <img src={props.img} alt={props.text} />
    <div className="text">{props.text}</div>
  </div>
);
