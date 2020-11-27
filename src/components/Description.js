import React, { useState } from "react";
import "./css/styles.css";
import "./css/skills.css";
import { Card } from "evergreen-ui";

function Description(props) {
  const [click, setClick] = useState(false);

  return (
    <Card
      className="card"
      elevation={1}
      paddingLeft={20}
      paddingRight={20}
      marginTop={20}
      onClick={() => setClick(!click)}
    >
      <div className="Description">
        <br />
        <div className="body-titles">
          <div className="col">
            <div className="title">{props.title}</div>
            <div className="body">{props.body}</div>
          </div>
          <div className="status">{props.status}</div>
        </div>
        {click ? (
          <div className="info" id="fade-in">
            {props.info}
          </div>
        ) : (
          <div className="info" id="fade-out">
            {props.info}
          </div>
        )}
        <br></br>
      </div>
    </Card>
  );
}

export default Description;
