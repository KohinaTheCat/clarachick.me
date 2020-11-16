import React, { Component } from "react";
import "../components/css/styles.css";
import "../components/css/util.css";

import { DisplayDes } from "../components/DisplayDes";
import { Card, Heading } from "evergreen-ui";
import GetLink from "../components/links/GetLink";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

import Sky from "react-sky";
import image1 from "../imgs/star.png";
import image2 from "../imgs/flower.png";
import image3 from "../imgs/heart.png";

//Clara Chick
export class Main extends Component {
  render() {
    return (
      <div className="Background">
        <ScrollToTop />
        <div className="Pane noselect">
          <div className="Pane" style={{ position: "absolute" }}>
            <Sky
              images={{
                0: image1,
                1: image2,
                2: image3,
              }}
              how={40}
              time={20}
              size={"100px"}
              background={"#ddebf7"}
            />
          </div>
          <div id="first">Clara Chick</div>
          <div id="second">Clara Chick</div>
          <div id="third">Clara Chick</div>
          {/* <div id="bar">clara chick</div> */}
          <div id="sent">
            <Footer />
          </div>
        </div>

        <Card className="Intro_Card" margin={24} borderRadius={10}>
          <Heading>
            <b>
              second year ― computer science ― university of toronto ― 3.98 cGPA
            </b>
            <br />
            <br />
            pursing a degree in computer science ― software engineering stream ―
            major in statistics
          </Heading>
          <GetLink
            name="Clara Chick Public Resume.pdf"
            words="download my one page resume - updated oct. 2020"
          ></GetLink>
        </Card>

        <DisplayDes></DisplayDes>
      </div>
    );
  }
}

export default Main;
