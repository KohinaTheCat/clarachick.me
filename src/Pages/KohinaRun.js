import React from "react";
import "../components/css/styles.css";
import "../components/css/markdowns.css";

import GetLink from "../components/links/GetLink";
import { Card } from "evergreen-ui";
import Markdown from "../components/Markdown";
import Header from "../components/Header";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Blog() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   onSwipe: true,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   autoplay: true,
  //   slidesToScroll: 1,
  // };

  // var imgs = [];
  // for (let i = 1; i < 8; i++) {
  //   imgs.push(require(`../imgs/kohinarun/${i}.png`));
  // }

  return (
    <div className="Background">
      <Header title="Kohina! Run" desc="an RPG in Visual Basic" />

      <Card className="blog_card blog_body">
        <Markdown md="kohinarun.md"></Markdown>

        {/* <Card className="slider">
          <Slider {...settings} className="imgs">
            {imgs.map((img, i) => (
              <img className="imgs" src={img} alt={i}></img>
            ))}
          </Slider>
        </Card> */}

        <GetLink
          name="Kohina!Run.zip"
          words=""
        ></GetLink>
      </Card>
    </div>
  );
}
