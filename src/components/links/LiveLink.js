import React from "react";
import { Link } from "evergreen-ui";

function LiveLink(props) {
  return (
    <Link href={props.url} target="_blank">
      <img
        style={{ height: 30, width: 30 }}
        src={require("../../imgs/icons/live.png")}
        className="hoverIcon"
        alt="live"
      />
    </Link>
  );
}

export default LiveLink;
