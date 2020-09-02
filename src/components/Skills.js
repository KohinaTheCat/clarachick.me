import React from "react";
import "./css/skills.css";
import Description from "./Description";

function Skills(props) {
  return (
    <div>
      {props.info.titles.map((titles, index) => (
        <Description
          title={titles}
          key={titles}
          status={props.info.status[index]}
          body={props.info.body[index]}
          info={props.info.info[index]}
          i={index}
        ></Description>
      ))}
    </div>
  );
}

export default Skills;
