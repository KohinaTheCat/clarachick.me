import React from "react";
import "../components/css/styles.css";

import GitHubLink from "../components/links/GithubLink";
import { Card } from "evergreen-ui";
import Markdown from "../components/Markdown";
import Header from "../components/Header";

export default function MERN() {
  return (
    <div className="Background">
      <Header title="BudgetMe" desc="MERN Stack, React-vis" />

      <Card className="blog_card blog_body">
        <Markdown md="budjetme.md"></Markdown>

        <GitHubLink url="https://github.com/KohinaTheCat/mern-practice" />
      </Card>
    </div>
  );
}
