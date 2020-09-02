import React from "react";
import "../components/css/styles.css";

import GetLink from "../components/links/GetLink";
import { Card } from "evergreen-ui";
import Markdown from "../components/Markdown";
import Header from "../components/Header";

export default function Blog() {
  return (
    <div className="Background">
      <Header title="Kohina! Run" desc="an RPG in Visual Basic" />

      <Card className="blog_card blog_body">
        <Markdown md="kohinarun.md"></Markdown>

        <b>unzip and run the .exe</b>
        <GetLink
          name="Kohina!Run.zip"
          words="download the playable game here"
        ></GetLink>
      </Card>
    </div>
  );
}
