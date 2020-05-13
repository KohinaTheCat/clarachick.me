import React, { Component } from "react";
import { Link } from "evergreen-ui";
import { Card } from "evergreen-ui";
import "./css/styles.css";
import Skills from "../components/Skills";
import GetLink from "./GetLink";
import { Link as L } from "react-router-dom";

export class DisplayDes extends Component {
  var;
  job = {
    titles: [
      "Junior Full-Stack Developer",
      "Technology Associate",
      "Coding Camp Counselor",
    ],
    status: [
      "Developer Student Club @ UTSC",
      "Staples",
      "Upper Canada College Summer Camps",
    ],
    body: [
      "Nov. 2019 - Present",
      "Sept. 2017 - Jan. 2020",
      "June 2018 - July 2018",
    ],
    info: [
      <div className="list">
        <li>
          This position pushed me to start learning about web-devleopment!
        </li>
        <li>
          Made a pseudo game lobby to practise Redux. In the game lobby there
          are four players and each player can choose one of seven colours of
          the rainbow, but not a colour that is chosen. Got familiar with
          MaterialUI
        </li>
        <li>
          Learned the Gitflow Workflow to work on projects in teams with ease
        </li>
        <li>
          Programmed a Log-in and Sign-up Menu in ReactJS and implemented the
          Firebase Authentication SDK to allow account creation, email
          verification and profile page customization
        </li>
        <li>
          Used Redux Forms to handle form state, and input validation and
          MaterialUI to format the menu
        </li>
      </div>,
      <div className="list">
        <li>
          This job really helped my communication skills. I was pushed to
          interact and deal with difficult customers. Made friends.
        </li>
        <li>
          Learned in a fast pace enviroment. I found myself learning about some
          new technology everyday, either from a customer or my co-workers.
        </li>
        <li>Did some upselling. Wasn't too bad at it.</li>
        <li>
          Provided customers with customized advice to satisfy their
          technological requirements
        </li>
        <li>
          Maintained a strong trust between customers to boost customer
          satisfaction
        </li>
        <li>
          Multitasked with different duties in an efficient way to prevent
          customers from waiting for support
        </li>
        <li>
          Communicated with other associates to ensure all customers are
          assisted, and all other tasks are done by a given deadline
        </li>
      </div>,
      <div className="list">
        <li>
          I volunteered at previous summer camps before, so I was prepared for
          this job, but I did have to learn to communicate with children who did
          not natively speak English. They were nice kids.
        </li>
        <li>
          This job challenged me to teach in front of my co-workers and
          children. Metaphors were quite helpful.
        </li>
        <li>Taught children the basic programming concepts in Python</li>
        <li>
          Collaborated with other camp counsellors to ensure every child was
          having fun
        </li>
        <li>
          Mediated fights between campers, finding a solution both parties
          agreed upon
        </li>
      </div>,
    ],
  };
  proj = {
    titles: ["clarachick.me", "DrawView", "Kohina! Run"],
    status: [
      "currently a work in progress",
      "currently a work in progress",
      "finished! - May 2018",
      "sporadic",
    ],
    body: [
      "Firebase Storage, ReactJS, SASS/Evergreen-UI",
      "React Native",
      "an open world RPG in Visual Basic",
      "",
    ],
    info: [
      <div>
        <ul className="list">
          <L to="/about_website">
            want some more details about the process? click here!
          </L>
          <br />
          <br />
          <Link href="https://github.com/KohinaTheCat/DrawView" target="_blank">
            you can review the code on my GitHub
          </Link>
          <br />
        </ul>
      </div>,
      <div>
        <ul className="list">
          <L to="/about_drawview">
            want some more details about the process? click here!
          </L>
          <br />
          <br />
          <Link
            href="https://github.com/KohinaTheCat/clarachick.me" target="_blank">
            you can review the code on my GitHub
          </Link>
        </ul>
      </div>,
      <div>
        <ul className="list">
          <L to="/about_kohinarun">
            want some more details about the process? click here!
          </L>
          <br />
          <br />
          <b>unzip and run the .exe</b>
          <GetLink
            name="Kohina!Run.zip"
            words="download the playable game here"
          ></GetLink>
        </ul>
      </div>,
    ],
  };
  side = {
    titles: ["Coming Soon"],
    status: ["currently a work in progress"],
    body: [""],
    info: [<div className=""></div>],
  };
  state = {
    clicked: [false, false, false],
    titles: ["work experience", "side projects", "other cool stuff"],
    info: [this.job, this.proj, this.side],
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
            key={title}
            margin={24}
            width="80%"
            onClick={() => this.click(index)}
            borderRadius={10}
          >
            <Card
              className="Card Card2"
              elevation={1}
              key={title}
              margin={24}
              borderRadius={10}
            >
              <Card
                className="Card Card3"
                elevation={1}
                key={title}
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
