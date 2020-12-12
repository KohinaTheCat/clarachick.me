import React from "react";
import { Link } from "evergreen-ui";

function DevpostLink(props) {
  return (
    <Link href={props.url} target="_blank">
      <img
        style={{ height: 30, width: 30 }}
        src={require("../../imgs/icons/devpost.png")}
        className="hoverIcon"
        alt="devpost"
      />
    </Link>
  );
}

export default DevpostLink;
