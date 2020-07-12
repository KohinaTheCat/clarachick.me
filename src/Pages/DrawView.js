import React from "react";
import "../components/css/styles.css";

import { Link } from "evergreen-ui";
import { Link as L } from "react-router-dom";
import { Card } from "evergreen-ui";
import Markdown from "../components/Markdown";

//MAKE COMPONENT LATER
import Sky from "react-sky";
import myImage from "../imgs/icon-kohina-opacity.png";
import image2 from "../imgs/cat.png";
import image3 from "../imgs/heart.png";

export default function DrawView() {
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
        <L to="/">
          <img
            src={require("../imgs/return.png")}
            alt="home"
            className="return"
          ></img>
        </L>
        <div className="blog_title">./DrawView</div>
        <div className="blog_subtitle">./React Native</div>
      </div>

      <Card className="blog_card blog_body">
        <Markdown md="drawview.md"></Markdown>

        <Link href="https://github.com/KohinaTheCat/DrawView" target="_blank">
          <h4>you can review the code on my GitHub</h4>
        </Link>
      </Card>
    </div>
  );
}
