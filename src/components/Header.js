import React from "react";
import "./css/styles.css";
import "./css/util.css";

import { images } from "./constants/Images";

import { Link } from "react-router-dom";
import Sky from "react-sky";

export default function Header(props) {
  return (
    <div className="Pane noselect">
      <div className="blog_header" style={{ position: "absolute", top: "0px" }}>
        <Sky
          images={{
            0: images.image1,
            1: images.image2,
            2: images.image3,
          }}
          how={50}
          time={30}
          size={"100px"}
          background={"#ddebf7"}
        />
      </div>
      <Link to="/">
        <img
          src={require("../imgs/icons/return.png")}
          style={{ opacity: 0.7 }}
          alt="home"
          className="return"
        ></img>
      </Link>
      <div className="blog_title">{"./" + props.title}</div>
      <div className="blog_subtitle">{"./" + props.desc}</div>
    </div>
  );
}
