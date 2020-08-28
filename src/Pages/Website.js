import React from "react";
import "../components/css/styles.css";

import { Link } from "evergreen-ui";
import { Card } from "evergreen-ui";
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

        <Link
          href="https://github.com/KohinaTheCat/clarachick.me"
          target="_blank"
        >
          <h4>you can review the code on my GitHub</h4>
        </Link>
      </Card>
    </div>
  );
}
