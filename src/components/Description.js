import React from "react";
import "./css/display.css";

function Description(props) {
  return (
    <div>
      <div className="Description">
        <br></br>
        <br></br>

          <div className="title">{props.title}</div>
          <div className="status">{props.status}</div>
          <div className="body">{props.body}</div>
        <div className = "info">{props.info}</div>
        <hr></hr>
        <br></br>
      </div>
    </div>
  );
}

export default Description;
