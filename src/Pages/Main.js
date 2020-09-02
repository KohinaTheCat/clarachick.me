import React, { Component } from "react";
import "../components/css/styles.css";
import "../components/css/util.css";

import { DisplayDes } from "../components/DisplayDes";
import { Card, Heading } from "evergreen-ui";
import GetLink from "../components/links/GetLink";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPython, faJava, faReact } from "@fortawesome/free-brands-svg-icons";
// import { faPython } from '@fortawesome/free-solid-svg-icons'

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
        <div className="Pane noselect">
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
            <Footer />
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
          {/* <div className="icon_row">
            <FontAwesomeIcon icon={faPython} size="lg" />
            <FontAwesomeIcon icon={faJava} size="lg"/>
            <FontAwesomeIcon icon={faReact} size="lg"/>
          </div> */}
        </Card>

        <DisplayDes></DisplayDes>
      </div>
    );
  }
}

export default Main;
