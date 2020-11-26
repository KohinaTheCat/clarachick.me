import React, { Component } from "react";
import "./css/skills.css";
import { Card, Link } from "evergreen-ui";
import Skills from "../components/Skills";
import GetLink from "./links/GetLink";
import PageLink from "./links/PageLink";
import GithubLink from "./links/GithubLink";
import Live from "./links/LiveLink";
import ProjectSnippet from "./ProjectSnippet";

//TODO: shorten this.
export class DisplayDes extends Component {
  var;
  job = {
    titles: [
      "MLH Fellow - Explorer Program",
      "Teaching Assistant",
      "Junior Full-Stack Developer",
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
      <ul className="list">
        <li>
          <b>Chronolo-Geese</b>
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
        <br />
        <br />
        <li>
          <b>Rex Run</b>
        </li>
        Based around Google's Dinosaur Game, Rex Run is a 3D Endless Runner made
        in Unity.
        <br />
        <br />
        <ProjectSnippet
          dep="https://simmer.io/@Shiyuez/rex-run"
          git="https://github.com/MLH-Fellowship/Rex-Run"
          dev="https://devpost.com/software/rex-run"
        />
        <br />
        <br />
        <li>
          <b>Simplify</b>
        </li>
        A Chrome Extension that summarizes any article you're reading in just
        one click!
        <br />
        <br />
        <ProjectSnippet
          dep=""
          git="https://github.com/MLH-Fellowship/Simplify"
          dev="https://devpost.com/software/simplify-cvn8mg"
        />
      </ul>,
      <ul className="list">
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
      </ul>,
      <ul className="list">
        <i>
          React, React Redux, Firebase Realtime Database, Firebase
          Authentication, Git
        </i>
        <br />
        <br />
        <li>
          Made a pseudo game lobby to where four players can choose a unique
          colour, from seven.
        </li>
        <li>
          Used Redux Forms to handle form state, and input validation and
          MaterialUI to format the menu.
        </li>
        <br />
        <li>
          Contributed to a web application that allows students to host their
          projects and find group members.
        </li>
        <li>
          Programmed a Log-in and Sign-up Menu in React and implemented the
          Firebase Authentication SDK to allow account creation, email
          verification and profile page customization.
        </li>
        <br />
        <div className="row">
          <GithubLink url="https://github.com/liuzimin/utsc-project" />
        </div>
      </ul>,
      <ul className="list">
        Provided customers with customized advice to satisfy their technological
        requirements, while upselling warranty plans.
      </ul>,
      <ul className="list">Taught children programming concepts in Python</ul>,
    ],
  };
  proj = {
    titles: [
      "U Impactify",
      "clarachick.me",
      "Mock Bash Shell",
      "Budget Clara",
      "Kohina!Run",
    ],
    status: [
      "currently a work in progress",
      "updating!",
      "finished! - August 2020",
      "currently a work in progress",
      "finished! - May 2018",
      "sporadic",
    ],
    body: [
      "MongoDB, Express, Angular, Node",
      "Firebase Storage, React, Sass/Evergreen-UI",
      "Object Orientated Programming - Java",
      "MongoDB, Express, React, Node, React-vis",
      <>an open world RPG in Visual Basic</>,
      "",
    ],
    info: [
      <div>
        <ul className="list">
          Currently engaged as a full-stack developer in a team of seven using
          the Agile Scrum methodology with Jira to develop UImpactify. I am
          actively leading noivce members with full-stack developement.
          <br />
          <br />
          UImpactify is an online learning platform that also gives a voice to
          rising and current non-profits.
          <br />
          <br />
          Source code will be provided once the project is done.
          <br />
        </ul>
      </div>,
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
          <div className="row">
            <GetLink name="Kohina!Run.zip" words=""></GetLink>
            <PageLink link="/about_kohinarun" />
          </div>
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
    titles: ["experience", "side projects", "misc."],
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
