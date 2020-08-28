import React from "react";
import "../components/css/styles.css";

import { Link } from "evergreen-ui";
import { Card } from "evergreen-ui";
import Markdown from "../components/Markdown";
import Header from "../components/Header";

export default function Shell() {
  return (
    <div className="Background">
      <Header title="Mock Bash Shell" desc="Object Orientated Programming" />

      <Card className="blog_card blog_body">
        <Markdown md="shell.md"></Markdown>

        <Link
          href="https://github.com/KohinaTheCat/Mock-Shell-in-Java/"
          target="_blank"
        >
          <h4>you can review the code on my GitHub</h4>
        </Link>
      </Card>
    </div>
  );
}
