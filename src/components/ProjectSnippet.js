import React from "react";
import { Link } from "evergreen-ui";

function ProjectSnippet(props) {
  return (
    <>
      {props.dep === "" ? (
        ""
      ) : (
        <>
          <i>Deployed at:</i>{" "}
          <Link target="_blank" rel="noopener noreferrer" href={props.dep}>
            {props.dep}
          </Link>
          <br />
        </>
      )}
      <i>Github:</i>{" "}
      <Link target="_blank" rel="noopener noreferrer" href={props.git}>
        {props.git}
      </Link>
      <br />
      <i>Devpost:</i>{" "}
      <Link target="_blank" rel="noopener noreferrer" href={props.dev}>
        {props.dev}
      </Link>
    </>
  );
}

export default ProjectSnippet;
