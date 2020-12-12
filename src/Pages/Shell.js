import React from "react";
import "../components/css/styles.css";

import { Card } from "evergreen-ui";
import GithubLink from "../components/links/GithubLink";
import Markdown from "../components/markdown/Markdown";
import Header from "../components/Header";

export default function Shell() {
  return (
    <div className="Background">
      <Header title="Mock Bash Shell" desc="Object Orientated Programming" />

      <Card className="blog_card blog_body">
        <Markdown md="shell.md"></Markdown>
        <GithubLink url="https://github.com/KohinaTheCat/Mock-Shell-in-Java/" />
      </Card>
    </div>
  );
}
