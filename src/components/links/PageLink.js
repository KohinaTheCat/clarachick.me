import React from "react";
import { Link } from "react-router-dom";

function PageLink(props) {
  return (
    <Link to={props.link}>
      <img
        title={props.link}
        style={{ height: 30, width: 30 }}
        src={require("../../imgs/about.png")}
        className="hoverIcon"
        alt="about"
      ></img>
    </Link>
  );
}

export default PageLink;
