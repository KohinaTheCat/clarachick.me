import React from "react";
import "../components/css/styles.css";

import GitHubLink from "../components/links/GithubLink";
import LiveLink from "../components/links/LiveLink";
import { Card } from "evergreen-ui";
import Markdown from "../components/markdown/Markdown";
import Header from "../components/Header";

export default function BudgetClara() {
  return (
    <div className="Background">
      <Header title="Budget Clara" desc="MERN Stack, React-vis" />

      <Card className="blog_card blog_body">
        <Markdown md="budjetme.md"></Markdown>

        <div className="icon_row">
          <GitHubLink url="https://github.com/KohinaTheCat/Budget-Clara" />
          <LiveLink url="https://budget-clara.herokuapp.com/" />
        </div>
      </Card>
    </div>
  );
}
