import React from "react";
import "./tags.css";

function Tags(props) {
  return (
    <>
      {props.tag.map((tag, i) => (
        <>
          {props.type === "s" ? (
            <div key={tag + i + "s"} className="tag s">
              {tag}
            </div>
          ) : (
            <div key={tag + i + "w"} className="tag w">
              {tag}
            </div>
          )}
        </>
      ))}
    </>
  );
}

export default Tags;
