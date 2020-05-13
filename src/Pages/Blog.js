import React from "react";
import styles from "../components/css/styles.css";
import Sky from "react-sky";

import myImage from "../imgs/icon-kohina-opacity.png";
import image2 from "../imgs/cat.png";
import image3 from "../imgs/heart.png";

import { Card } from "evergreen-ui";

export default function Blog() {
  return (
    <div className="Background">
      <div className="Pane">
        <div className="blog_header" style={{ position: "absolute" }}>
          <Sky
            images={{
              0: myImage,
              1: image2,
              2: image3,
            }}
            how={50}
            time={30} /* time of animation */
            size={"100px"} /* size of the rendered images */
            background={"#ddebf7"}
          />
        </div>

        <div className="blog_title">./title</div>
        <div className="blog_subtitle">../desc</div>
      </div>

      <Card className="blog_card blog_body">
        <pre class="code prettyprint lang-python">(friends 'of '(parentheses))</pre>
      </Card>
    </div>
  );
}
