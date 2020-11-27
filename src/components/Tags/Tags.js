import React from "react";
import "./tags.css";

function Tags(props) {
  return (
    <>
      {props.type === "s" ? (
        <div className="tag s">{props.tag}</div>
      ) : (
        <div className="tag w">{props.tag}</div>
      )}
    </>
  );
}

export default Tags;
