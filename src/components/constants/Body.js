import React from "react";

import { Link, Heading } from "evergreen-ui";
import GetLink from "../links/GetLink";
import PageLink from "../links/PageLink";
import GithubLink from "../links/GithubLink";
import Live from "../links/LiveLink";
import ProjectSnippet from "../ProjectSnippet";
import Tags from "../tags/Tags";

// experience
const mlh = {
  heading: "MLH Fellow - Explorer Program",
  status: "Oct. 2020 - Dec. 2020",
  tags: (
    <>
      <Tags tag={["Major League Hacking"]} type="w" />
      <br />
      <Tags
        type="s"
        tag={[
          "React",
          "Unity3D",
          "Machine Learning",
          "Firebase",
          "MongoDB",
          "Node",
          "Express",
          "Electron",
          "Next.js",
          "JAMstack",
          "Figma"
        ]}
      />
    </>
  ),
  body: (
    <ul className="list">
      <blockquote>
        <Heading is="h3" size={560}>
          Chronolo-Geese
        </Heading>
      </blockquote>
      <div className="tab">
        Chronolo-Geese​ is a schedule conflict manager for students. It visually
        shows what is the optimum time to meet up for group projects, study
        sessions, or office hours with teachers.
      </div>
      <br />
      <ProjectSnippet
        dep="https://chronolo-geese.web.app/"
        git="https://github.com/MLH-Fellowship/Chronolo-Geese"
        dev="https://devpost.com/software/chronolo-geese"
      />
      <br />
      <br />
      <blockquote>
        <Heading is="h3" size={560}>
          Rex Run
        </Heading>
      </blockquote>
      <div className="tab">
        Based around Google's Dinosaur Game, Rex Run is a 3D Endless Runner made
        in Unity.
      </div>
      <br />
      <ProjectSnippet
        dep="https://simmer.io/@Shiyuez/rex-run"
        git="https://github.com/MLH-Fellowship/Rex-Run"
        dev="https://devpost.com/software/rex-run"
      />
      <br />
      <br />
      <blockquote>
        <Heading is="h3" size={560}>
          Simplify
        </Heading>
      </blockquote>
      <div className="tab">
        A Chrome Extension that summarizes any article you're reading in just
        one click!
      </div>
      <br />
      <ProjectSnippet
        dep=""
        git="https://github.com/MLH-Fellowship/Simplify"
        dev="https://devpost.com/software/simplify-cvn8mg"
      />
      <br />
      <br />
      <blockquote>
        <Heading is="h3" size={560}>
          Boiler.js
        </Heading>
      </blockquote>
      <div className="tab">
        Boiler.js is a desktop application for software developers to quickly
        find and set up boilerplates on their local machine in under a minute
      </div>
      <br />
      <ProjectSnippet
        dep=""
        git="https://github.com/MLH-Fellowship/Boiler.js"
        dev="https://devpost.com/software/boiler-js"
      />
      <br />
      <br />
      <blockquote>
        <Heading is="h3" size={560}>
          Volunteer.me
        </Heading>
      </blockquote>
      <div className="tab">
        Volunteer.me is a global collaboration platform that connects people
        seeking to volunteer, and those who need volunteers.
      </div>
      <br />
      <ProjectSnippet
        dep="https://volunteer-me.vercel.app/"
        git="https://github.com/MLH-Fellowship/volunteer-me"
        dev="https://devpost.com/software/volunteer-me-c8mq07"
      />
    </ul>
  ),
};

const ta = {
  heading: "Teaching Assistant",
  status: "Sept. 2020 - Present",
  tags: (
    <>
      <Tags tag={["University of Toronto"]} type="w" />
      <br />
      <Tags type="s" tag={["Python"]} />
    </>
  ),
  body: (
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
    </ul>
  ),
};

const dsc = {
  heading: "Junior Full-Stack Developer",
  status: "Nov. 2019 - May 2020",
  tags: (
    <>
      <Tags tag={["Developer Student Club @ UTSC"]} type="w" />
      <br />
      <Tags type="s" tag={["React", "Redux", "Firebase"]} />
    </>
  ),
  body: (
    <ul className="list">
      <li>
        Used Redux Forms to handle form state, and input validation and
        MaterialUI to format the menu.
      </li>
      <li>
        Contributed to a web application that allows students to host their
        projects and find group members.
      </li>
      <li>
        Programmed a Log-in and Sign-up Menu in React by implementing the
        Firebase Authentication SDK to allow account creation, email
        verification and profile page customization.
      </li>
      <div className="row">
        <GithubLink url="https://github.com/liuzimin/utsc-project" />
      </div>
    </ul>
  ),
};

const staples = {
  heading: "Technology Associate",
  status: "Sept. 2017 - Jan. 2020",
  tags: <Tags tag={["Staples"]} type="w" />,
  body: (
    <ul className="list">
      Provided customers with customized advice to satisfy their technological
      requirements, while upselling warranty plans.
    </ul>
  ),
};

const ucc = {
  heading: "Coding Camp Counselor",
  status: "June 2018 - July 2018",
  tags: (
    <>
      <Tags tag={["Upper Canada College Summer Camps"]} type="w" />
      <br />
      <Tags type="s" tag={["Python"]} />
    </>
  ),
  body: (
    <ul className="list">
      Supervised and taught around 15 to 20 different campers about
      coding concepts using Python, on a weekly basis
    </ul>
  ),
};

// projects
const uimpactify = {
  heading: "U Impactify",
  status: "finished!",
  tags: (
    <Tags
      type="s"
      tag={[
        "MongoDB",
        "GridFS",
        "Express",
        "Angular",
        "Node",
        "Socket.io",
        "Chart.js",
        "Figma",
        "Agile",
      ]}
    />
  ),
  body: (
    <div>
      <ul className="list">
        Engaged as a full-stack developer in a team of seven using the Agile
        Scrum methodology with Jira to develop U Impactify.
        <br />
        <br />
        U Impactify, the E-Learning platform dedicated to serve the social
        purpose sector. ​
        <br />
        <br />
        <div className="row">
          <GithubLink url="https://github.com/KohinaTheCat/U-Impactify" />
          <Live url="https://uimpactify.herokuapp.com/" />
        </div>
        <br />
      </ul>
    </div>
  ),
};

const website = {
  heading: "clarachick.me",
  status: "updating!",
  tags: (
    <Tags
      type="s"
      tag={["Firebase Storage", "React", "Sass", "Evergreen-UI"]}
    />
  ),
  body: (
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
    </div>
  ),
};

const shell = {
  heading: "Mock Bash Shell",
  status: "finished!",
  tags: (
    <Tags type="s" tag={["Java", "Object Orientated Programming", "Agile"]} />
  ),
  body: (
    <div>
      <ul className="list">
        Developed in a team of three using the the Agile Scrum methodology that
        implements core bash commands.
        <br />
        <br />
        <div className="row">
          <GithubLink url="https://github.com/KohinaTheCat/Mock-Shell-in-Java/" />
          <PageLink link="/about_mockshell" />
        </div>
      </ul>
    </div>
  ),
};

const budgetclara = {
  heading: "Budget Clara",
  status: "work in progress",
  tags: (
    <Tags type="s" tag={["MongoDB", "Express", "React", "Node", "React-vis"]} />
  ),
  body: (
    <div>
      <ul className="list">
        Made a REST API with the MERN stack to allow the user to create, read,
        update, and delete their day-to-day expenses, while having it visualized
        using React-vis.
        <br />
        <br />
        <div className="row">
          <GithubLink url="https://github.com/KohinaTheCat/mern-practice" />
          <Live url="https://budget-clara.herokuapp.com/" />
          <PageLink link="/about_budgetclara" />
        </div>
      </ul>
    </div>
  ),
};

const kohinarun = {
  heading: "Kohina!Run",
  status: "finished!",
  tags: <Tags type="s" tag={["Visual Basic"]} />,
  body: (
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
    </div>
  ),
};

// NEW
export const projects = [uimpactify, website, shell, budgetclara, kohinarun];

export const experience = [mlh, ta, dsc, staples, ucc];
