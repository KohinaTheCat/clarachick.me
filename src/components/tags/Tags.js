import React from "react";
import "./tags.css";

function Tags(props) {
  return (
    <>
      {props.tag.map((tag, i) => (
        <div key={tag + i + props.type} className={"tags " + props.type}>
          {tag}
        </div>
      ))}
    </>
  );
}

export default Tags;
