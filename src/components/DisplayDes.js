import React, { Component } from "react";
import "./css/skills.css";
import { Card } from "evergreen-ui";
import Skills from "../components/Skills";
import GetLink from "./links/GetLink";
import PageLink from "./links/PageLink";
import GithubLink from "./links/GithubLink";
import Live from "./links/LiveLink";

//SHORTEN THIS. LESS TEXT
export class DisplayDes extends Component {
  var;
  job = {
    titles: [
      "Teaching Assistant",
      "Junior Full-Stack Developer",
      "Technology Associate",
      "Coding Camp Counselor",
    ],
    status: [
      "University of Toronto",
      "Developer Student Club @ UTSC",
      "Staples",
      "Upper Canada College Summer Camps",
    ],
    body: [
      "Sept. 2020 - Present",
      "Nov. 2019 - May 2020",
      "Sept. 2017 - Jan. 2020",
      "June 2018 - July 2018",
    ],
    info: [
      <div className="list">
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://utsc.calendar.utoronto.ca/course/csca08h3">
            CSCA08 - Introduction to Computer Science I
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://utsc.calendar.utoronto.ca/course/csca08h3">
            MGTA01 - Introduction to Business
          </a>
        </li>
      </div>,
      <div className="list">
        <li>
          Made a pseudo game lobby to practice Redux. In the game lobby there
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
        <li>Learned in a fast pace enviroment.</li>
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
      </div>,
    ],
  };
  proj = {
    titles: ["clarachick.me", "Mock Bash Shell", "BudgetClara", "Kohina!Run"],
    status: [
      "updating!",
      "finished! - August 2020",
      "currently a work in progress",
      "finished! - May 2018",
      "sporadic",
    ],
    body: [
      "Firebase Storage, React, Sass/Evergreen-UI",
      "Object Orientated Programming - Java",
      "MERN Stack, React-vis",
      <>an open world RPG in Visual Basic</>,
      "",
    ],
    info: [
      <div>
        <ul className="list">
          This is just a personal website to show my experience and technical
          skills.
          <br />
          <br />
          <div className="row">
            <GithubLink url="https://github.com/KohinaTheCat/clarachick.me" />
            <Live url="https://clarachick.me/" />
            <PageLink link="/about_website" />
          </div>
        </ul>
      </div>,
      <div>
        <ul className="list">
          Developed in a team of three using the the Agile Scrum methodology
          that implements core bash commands.
          <br />
          <br />
          <div className="row">
            <GithubLink url="https://github.com/KohinaTheCat/Mock-Shell-in-Java/" />
            <PageLink link="/about_mockshell" />
          </div>
        </ul>
      </div>,
      <div>
        <ul className="list">
          Made a REST API with the MERN stack to allow the user to create, read,
          update, and delete [CRUD] their day-to-day expenses, while having it
          visualized using React-vis.
          <br />
          <br />
          <div className="row">
            <GithubLink url="https://github.com/KohinaTheCat/mern-practice" />
            <Live url="https://budget-clara.herokuapp.com/" />
            <PageLink link="/about_MERN" />
          </div>
        </ul>
      </div>,
      <div>
        <ul className="list">
          Kohina!Run is an open world RPG where you play as a girl who travels
          around town to make a bowl of noodles. You have to complete minigames,
          solve puzzles and talk to players around the town to find the
          ingredients.
          <br />
          <br />
          <PageLink link="/about_kohinarun" />
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
    titles: ["experience", "side projects", "other cool stuff"],
    info: [this.job, this.proj, this.side],
  };

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
          >
            <Card className="Card Card2" elevation={1} key={title} margin={24}>
              <Card
                className="Card Card3"
                elevation={1}
                key={title}
                margin={24}
              >
                <div id="f">{title}</div>
              </Card>
            </Card>
            <div id="p">
              <Skills info={this.state.info[index]}></Skills>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default DisplayDes;
