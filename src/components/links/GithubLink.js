import React from "react";
import { Link } from "evergreen-ui";

function GithubLink(props) {
  return (
    <Link href={props.url} target="_blank">
      <img
        style={{ height: 30, width: 30 }}
        src={require("../../imgs/icons/github.png")}
        className="hoverIcon"
        alt="github"
      />
    </Link>
  );
}

export default GithubLink;
