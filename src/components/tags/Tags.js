import React from "react";
import "./tags.css";

function Tags(props) {
  return (
    <>
      {props.tag.map((tag, i) => (
        <>
          {props.type === "s" ? (
            <div key={tag + i + "s"} className="tags s">
              {tag}
            </div>
          ) : (
            <div key={tag + i + "w"} className="tags w">
              {tag}
            </div>
          )}
        </>
      ))}
    </>
  );
}

export default Tags;
