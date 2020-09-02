import React from "react";
import "../components/css/styles.css";

import { Card } from "evergreen-ui";
import GitHubLink from "../components/links/GithubLink";
import Markdown from "../components/Markdown";
import Header from "../components/Header";

export default function Website() {
  return (
    <div className="Background">
      <Header
        title="clarachick.me"
        desc="Firebase Storage, ReactJS, SASS/Evergreen-UI"
      />

      <Card className="blog_card blog_body">
        <Markdown md="website.md"></Markdown>
        <GitHubLink url="https://github.com/KohinaTheCat/clarachick.me" />
      </Card>
    </div>
  );
}
