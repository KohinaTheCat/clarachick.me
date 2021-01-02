import React from "react";
import "../components/css/styles.css";

import { Card } from "evergreen-ui";
import GitHubLink from "../components/links/GithubLink";
import LiveLink from "../components/links/LiveLink";
import Markdown from "../components/markdown/Markdown";
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

        <div className="icon_row">
          <GitHubLink url="https://github.com/KohinaTheCat/clarachick.me" />
          <LiveLink url="https://clarachick.me/" />
        </div>
      </Card>
    </div>
  );
}
