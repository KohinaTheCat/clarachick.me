import React from "react";
import "./css/styles.css";
import { Card } from "evergreen-ui";

function Description(props) {
  return (
    <Card
      className="card"
      elevation={1}
      paddingLeft={20}
      paddingRight={20}
      marginTop={20}
      marginBotton={20}
    >
      <div className="Description">
        <br></br>

        <div className="title">{props.title}</div>
        <div className="status">{props.status}</div>
        <div className="body">{props.body}</div>

        <div className="info">{props.info}</div>
        <br></br>
      </div>
    </Card>
  );
}

export default Description;
