import React, { Component } from "react";
import "../components/css/styles.css";

import { DisplayDes } from "../components/DisplayDes";
import { Card, Heading } from "evergreen-ui";
import GetLink from "../components/GetLink";
import ScrollToTop from "../components/ScrollToTop";

//MAKE COMPONENT LATER
import Sky from "react-sky";
import myImage from "../imgs/icon-kohina-opacity.png";
import image2 from "../imgs/cat.png";
import image3 from "../imgs/heart.png";

//Clara Chick
export class Main extends Component {
  render() {
    return (
      <div className="Background">
        <ScrollToTop />
        <div className="Pane">
          <div className="Pane" style={{ position: "absolute" }}>
            <Sky
              images={{
                0: myImage,
                1: image2,
                2: image3,
              }}
              how={40}
              time={20} /* time of animation */
              size={"100px"} /* size of the rendered images */
              background={"#ddebf7"}
            />
          </div>

          {/* <div id="greeting">Cheers, it's</div> */}
          <div id="first">Clara Chick</div>
          <div id="second">Clara Chick</div>
          <div id="third">Clara Chick</div>
          <div id="sent">
            <div className="footer center">
              <div className="footer center">
                <div className="cont">
                  <a href="https://www.instagram.com/aaclr60/">
                    <img
                      src={require("../imgs/icons/insta.png")}
                      className="icon"
                      alt="insta"
                    />
                  </a>
                </div>
                <div className="cont">
                  <a href="https://www.linkedin.com/in/clarachick/">
                    <img
                      src={require("../imgs/icons/link.png")}
                      className="icon"
                      alt="link"
                    ></img>
                  </a>
                </div>
                <div className="cont">
                  <a href="https://github.com/KohinaTheCat">
                    <img
                      src={require("../imgs/icons/github.png")}
                      className="icon"
                      alt="github"
                    ></img>
                  </a>
                </div>
                <div className="cont">
                  <a href="mailto:clara.chick@mail.utoronto.ca">
                    <img
                      src={require("../imgs/icons/mail.png")}
                      className="icon"
                      alt="email"
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="Intro_Card" margin={24} borderRadius={10}>
          <Heading>
            <b>
              second year ― computer science ― university of toronto ― 4.0 cGPA
            </b>
            <br />
            <br />
            pursing a degree in computer science ― software engineering stream ―
            major in statistics
          </Heading>

          <GetLink
            name="Clara Chick Public Resume.pdf"
            words="download my extended resume - updated august. 2020"
          ></GetLink>
        </Card>

        <DisplayDes></DisplayDes>
      </div>
    );
  }
}

export default Main;
