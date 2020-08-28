import React from "react";
import styles from "../components/css/styles.css";

import { Card } from "evergreen-ui";

import Header from "../components/Header";

export default function Blog() {
  return (
    <div className="Background">
      <Header title="blog_title" desc="blog_desc" />

      <Card className="blog_card blog_body">
        <pre class="code prettyprint lang-python">
          (friends 'of '(parentheses))
        </pre>
      </Card>
    </div>
  );
}
