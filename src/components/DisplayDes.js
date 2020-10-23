import React, { Component } from "react";
import "./css/skills.css";
import { Card } from "evergreen-ui";
import Skills from "../components/Skills";
import GetLink from "./links/GetLink";
import PageLink from "./links/PageLink";
import GithubLink from "./links/GithubLink";
import Live from "./links/LiveLink";
import { Link } from "evergreen-ui";
import ProjectSnippet from "./ProjectSnippet";

//SHORTEN THIS. LESS TEXT
export class DisplayDes extends Component {
  var;
  job = {
    titles: [
      "MLH Fellow - 🚀 Explorer Program",
      "Teaching Assistant",
      "💻 Junior Full-Stack Developer",
      "Technology Associate",
      "Coding Camp Counselor",
    ],
    status: [
      "Major League Hacking",
      "University of Toronto",
      "Developer Student Club @ UTSC",
      "Staples",
      "Upper Canada College Summer Camps",
    ],
    body: [
      "Oct. 2020 - Present",
      "Sept. 2020 - Present",
      "Nov. 2019 - May 2020",
      "Sept. 2017 - Jan. 2020",
      "June 2018 - July 2018",
    ],
    info: [
      <div className="list">
        <li>
          <b>Chronolo-Geese</b> 🦆
        </li>
        Chronolo-Geese​ is a schedule conflict manager for students. It visually
        shows what is the optimum time to meet up for group projects, study
        sessions, or office hours with teachers.
        <br />
        <br />
        <ProjectSnippet
          dep="https://chronolo-geese.web.app/"
          git="https://github.com/MLH-Fellowship/Chronolo-Geese"
          dev="https://devpost.com/software/chronolo-geese"
        />
      </div>,
      <div className="list">
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://utsc.calendar.utoronto.ca/course/csca08h3"
          >
            CSCA08
          </Link>
          {"  "}- Introduction to Computer Science I
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://utsc.calendar.utoronto.ca/course/mgta01h3"
          >
            MGTA01
          </Link>
          {"  "}- Introduction to Business
        </li>
      </div>,
      <div className="list">
        <i>React, React Redux, Firebase, Git</i>
        <br />
        <br />
        <li>
          Programmed a Log-in and Sign-up Menu in ReactJS and implemented the
          Firebase Authentication SDK to allow account creation, email
          verification and profile page customization.
        </li>
        <li>
          Used Redux Forms to handle form state, and input validation and
          MaterialUI to format the menu.
        </li>
        <li>
          Made a pseudo game lobby to where four players can choose a unique
          colour, from seven.
        </li>
      </div>,
      <div className="list">
        Provided customers with customized advice to satisfy their technological
        requirements, while upselling warranty plans.
      </div>,
      <div className="list">
        Taught children programming concepts in Python
      </div>,
    ],
  };
  proj = {
    titles: ["🌎 clarachick.me", "Mock Bash Shell 🐚", "Budget 💸 Clara", "🎮 Kohina!Run"],
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
    titles: ["DrawView"],
    status: ["indefinite hiatus"],
    body: ["React Native"],
    info: [
      <div>
        <ul className="list">
          An app to help people draw by guiding them using their phone camera.
          The ultimate idea was to use OpenCV to automatically guide the user,
          but I still haven't figured out how.
          <br />
          <br />
          What currently is done would be a proto-type of those tracing apps.
        </ul>
      </div>,
    ],
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
