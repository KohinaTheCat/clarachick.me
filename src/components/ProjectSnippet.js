import React from "react";
import DevpostLink from "./links/DevpostLink";
import LiveLink from "./links/LiveLink";
import GithubLink from "./links/GithubLink";

function ProjectSnippet(props) {
  return (
    <div className="row">
      <GithubLink url={props.git} />
      {props.dep !== "" ? <LiveLink url={props.dep} /> : ""}
      <DevpostLink url={props.dev} />
    </div>
  );
}

export default ProjectSnippet;
