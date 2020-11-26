import React from "react";
import "./css/styles.css";
import "./css/util.css";
import { Link as L } from "react-router-dom";

import Sky from "react-sky";
import image1 from "../imgs/header/star.png";
import image2 from "../imgs/header/flower.png";
import image3 from "../imgs/header/heart.png";

export default function Header(props) {
  return (
    <div className="Pane noselect">
      <div className="blog_header" style={{ position: "absolute", top: "0px" }}>
        <Sky
          images={{
            0: image1,
            1: image2,
            2: image3,
          }}
          how={50}
          time={30}
          size={"100px"}
          background={"#ddebf7"}
        />
      </div>
      <L to="/">
        <img
          src={require("../imgs/icons/return.png")}
          style={{ opacity: 0.7 }}
          alt="home"
          className="return"
        ></img>
      </L>
      <div className="blog_title">{"./" + props.title}</div>
      <div className="blog_subtitle">{"./" + props.desc}</div>
    </div>
  );
}
