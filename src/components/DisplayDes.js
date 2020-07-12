import React, { Component } from "react";
import "./css/skills.css";
import { Link, Card } from "evergreen-ui";
import Skills from "../components/Skills";
import GetLink from "./GetLink";
import { Link as L } from "react-router-dom";


//SHORTEN THIS. LESS TEXT
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
          Made a pseudo game lobby to practise Redux. In the game lobby there
          are four players and each player can choose one of seven colours of
          the rainbow, but not a colour that is chosen.
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
          Learned in a fast pace enviroment. 
        </li>
        <li>Upsold warranty plans</li>
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
        <li>Taught children the basic programming concepts in Python</li>
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
      "updating! - May 2020",
      "finished! - May 2018",
      "sporadic",
    ],
    body: [
      "Firebase Storage, ReactJS, SASS/Evergreen-UI",
      "React Native",
      <>
        an open world RPG in Visual Basic
      </>,
      "",
    ],
    info: [
      <div>
        <ul className="list">
          This is just a personal website to show my experience and technical
          skills.
          <br />
          <br />
          <L to="/about_website">
            want some more details about the process? click here!
          </L>
          <br />
        </ul>
        <Link
          href="https://github.com/KohinaTheCat/clarachick.me"
          target="_blank"
        >
          <h4>you can review the code on my GitHub</h4>
        </Link>
      </div>,
      <div>
        <ul className="list">
          When starting to draw, it is good to follow references. This app is
          supposed to help beginners make sure they're "on track" with their
          references and guide them on areas that they're struggling with.
          <br />
          <br />
          <L to="/about_drawview">
            want some more details about the process? click here!
          </L>
          <br />
        </ul>
        <Link href="https://github.com/KohinaTheCat/DrawView" target="_blank">
          <h4>you can review the code on my GitHub</h4>
        </Link>
      </div>,
      <div>
        <ul className="list">
          Kohina!Run is an open world RPG where you play as a girl who travels
          around town to make a bowl of noodles. You have to complete minigames,
          solve puzzles and talk to players around the town to find the
          ingredients.
          <br />
          <br />
          <L to="/about_kohinarun">
            want some more details about the process? click here!
          </L>
          <br />
          <br />
        </ul>
        <b>unzip and run the .exe</b>
        <GetLink
          name="Kohina!Run.zip"
          words="download the playable game here"
        ></GetLink>
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
          >
            <Card
              className="Card Card2"
              elevation={1}
              key={title}
              margin={24}
            >
              <Card
                className="Card Card3"
                elevation={1}
                key={title}
                margin={24}
              >
                <div id="f">{title}</div>
              </Card>
            </Card>
            {this.state.clicked[index] ? (
              <div id="fade-in">
                <Skills
                  state={this.state.clicked[index]}
                  info={this.state.info[index]}
                ></Skills>
              </div>
            ) : (
              <div id="fade-out">
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
