import React, { Component } from "react";
import "./Main.css";
import Footer from "../components/Footer";
import { DisplayDes } from "../components/DisplayDes";
import { Card } from "evergreen-ui";
import GetLink from "../components/GetLink"

export class Main extends Component {

  render() {
    return (
      <div className="Background">
        <div className="Pane">
          <div id="greeting">Hey Internet, it's</div>
          <div id="first">Clara</div>
          <div id="second">Clara</div>
          <div id="third">Clara</div>
          <div id="sent">she likes to do the beep boop.</div>
        </div>
        <Card className="Intro_Card" margin={24} borderRadius={10}>
          <h4>first year - computer science - university of toronto</h4>
          <GetLink words = "download my extended resume - updated dec. 2019"></GetLink>
          <br></br>
        </Card>
        <DisplayDes></DisplayDes>

        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
