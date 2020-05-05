import React, { Component } from "react";
import { Link } from "evergreen-ui";
import {Card} from "evergreen-ui";
import "./css/styles.css";
import Skills from "../components/Skills";
import GetLink from "./GetLink"

export class DisplayDes extends Component {

  var 
  job = {
    titles: [
      "Junior Full-Stack Developer",
      "Technology Associate",
      "Coding Camp Counselor"
    ],
    status: [
      "Developer Student Club @ UTSC",
      "Staples",
      "Upper Canada College Summer Camps"
    ],
    body: [
      "Nov. 2019 - Present",
      "Sept. 2017 - Jan. 2020",
      "June 2018 - July 2018"
    ],
    info: [
      "",
      <div className="">
        <ul>
        </ul>
      </div>,
      ""
    ]
  };
  proj = {
    titles: ["clarachick.me", "DrawView", "Log-In and Sign-Up Menu", "Kohina! Run"],
    status: [
      "currently a work in progress",
      "currently a work in progress",
      "finished! - March 2020",
      "finished! - May 2018",
      "sporadic"
    ],
    body: [
      "Firebase Storage, ReactJS, SASS/Evergreen-UI",
      "React Native",
      "Firebase Authentication, ReactJS & Redux Form and Material-UI",
      "an open world RPG in Visual Basic",
      ""
    ],
    info: [
      <div>
        <ul className = "list">
            <li>
                all files are hosted on Firebase, such that download links are generated on demand.
            </li>
            <Link href="https://github.com/KohinaTheCat/DrawView" target="_blank">you can review the code on my GitHub</Link>
        </ul>
      </div>,
      <div>
      <ul className = "list">
          <li>
              trying to make an app that will help you learn to draw... more updates later
          </li>
          <Link href="https://github.com/KohinaTheCat/clarachick.me" target="_blank">you can review the code on my GitHub</Link>
      </ul>
    </div>,
      <div>
        <ul className = "list"> 
            <li>Firebase Authentication allowed me to implement account creation, email verification and page customization.
            </li>
            <li>Redux Form to manage form state</li>
            <li>thanks to Material-UI, it is easy on the eyes</li>
        </ul>
      </div>,
      <div>
        <ul className = "list">
            <li>all assets were drawn and coloured</li>
            <li>unzip and run the .exe</li>
            <GetLink name = "Kohina!Run.zip" words = "download the playable game here"></GetLink>
        </ul>
      </div>,
      <div className="">
        <ul>
          <div className="">
            <b>2019 - An IO game using NodeJS</b>
            <ul>
            </ul>
          </div>
          <br />
          <br />
          <div className="">
            <b>2019 - RPG with 2D Unity</b>
            <ul>
            </ul>
          </div>
        </ul>
      </div>
    ]
  };
  side = {
    titles: ["Coming Soon"],
    status: [
      "currently a work in progress"
    ],
    body: [
      ""
    ],
    info: [
      <div className="">
      </div>
    ]
  };
  state = {
    clicked: [false, false, false],
    titles: ["Work Experience", "Side Projects", "Other Cool Stuff"],
    info: [this.job, this.proj, this.side]
  };

  click(j) {
    var copy = this.state.clicked;
    copy[j] = !this.state.clicked[j];
    this.setState({ clicked: copy });
  }

  render() {
    return (
      <div className="Background">
        {this.state.titles.map((title, index) => (
          <Card
            className="Card_main hover"
            elevation={1}
            key = {title}
            margin={24}
            width="80%"
            onClick={() => this.click(index)}
            borderRadius={10}
          >
            <Card
              className="Card Card2"
              elevation={1}
              key = {title}
              margin={24}
              borderRadius={10}
            >
              <Card
                className="Card Card3"
                elevation={1}
                key = {title}
                margin={24}
                borderRadius={10}
              >
                <div id="f">{title}</div>
              </Card>
            </Card>
            {this.state.clicked[index] ? (
              <div className="fade-in">
                <Skills
                  state={this.state.clicked[index]}
                  info={this.state.info[index]}
                ></Skills>
              </div>
            ) : (
              <div className="fade-out">
                <Skills
                  state={this.state.clicked[index]}
                  info={this.state.info[index]}
                ></Skills>
              </div>
            )}
          </Card>
        ))}
      </div>
    );
  }
}

export default DisplayDes;
