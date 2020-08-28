import React from "react";
import "../components/css/styles.css";

import { Link } from "evergreen-ui";
import { Card } from "evergreen-ui";
import Markdown from "../components/Markdown";
import Header from "../components/Header";

export default function MERN() {
  return (
    <div className="Background">
      <Header title="BudgetMe" desc="MERN Stack, React-vis" />

      <Card className="blog_card blog_body">
        <Markdown md="budjetme.md"></Markdown>

        <Link
          href="https://github.com/KohinaTheCat/mern-practice"
          target="_blank"
        >
          <h4>you can review the code on my GitHub</h4>
        </Link>
      </Card>
    </div>
  );
}
