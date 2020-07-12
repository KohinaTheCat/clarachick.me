import React from "react";
import "../components/css/styles.css";

import { Link as L } from "react-router-dom";
import GetLink from "../components/GetLink";
import { Card } from "evergreen-ui";
import Markdown from "../components/Markdown";

//MAKE COMPONENT LATER
import Sky from "react-sky";
import myImage from "../imgs/icon-kohina-opacity.png";
import image2 from "../imgs/cat.png";
import image3 from "../imgs/heart.png";

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
            time={50} 
            size={"100px"}
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
        <div className="blog_title">./Kohina!Run</div>
        <div className="blog_subtitle">./a RPG in Visual Basic</div>
      </div>

      <Card className="blog_card blog_body">
        <Markdown md="kohinarun.md"></Markdown>

        <b>unzip and run the .exe</b>
        <GetLink
          name="Kohina!Run.zip"
          words="download the playable game here"
        ></GetLink>
      </Card>
    </div>
  );
}
