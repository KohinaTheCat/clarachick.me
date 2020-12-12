import React, { useState } from "react";

import "../css/styles.css";
import "../css/skills.css";

import { Card } from "evergreen-ui";

function CategoryCard(props) {
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
          <div className="title">{props.heading}</div>
          {props.status}
        </div>
        <div className="body">{props.tags}</div>
        {click ? (
          <div className="info" id="fade-in">
            {props.body}
          </div>
        ) : (
          <div className="info" id="fade-out">
            {props.body}
          </div>
        )}
        <br />
      </div>
    </Card>
  );
}

export default CategoryCard;
