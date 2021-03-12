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
          "Figma",
        ]}
      />
    </>
  ),
  body: (
    <ul className="list">
      <blockquote>
        <Heading is="h3" size={500}>
          Chronolo-Geese
        </Heading>
      </blockquote>
      <div className="tab">
        Chronolo-Geese​ is a schedule conflict manager for students. It visually shows what is the
        optimum time to meet up for group projects, study sessions, or office hours with teachers.
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
        <Heading is="h3" size={500}>
          Rex Run
        </Heading>
      </blockquote>
      <div className="tab">
        Based around Google's Dinosaur Game, Rex Run is a 3D Endless Runner made in Unity.
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
        <Heading is="h3" size={500}>
          Simplify
        </Heading>
      </blockquote>
      <div className="tab">
        A Chrome Extension that summarizes any article you're reading in just one click!
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
        <Heading is="h3" size={500}>
          Boiler.js
        </Heading>
      </blockquote>
      <div className="tab">
        Boiler.js is a desktop application for software developers to quickly find and set up
        boilerplates on their local machine in under a minute
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
        <Heading is="h3" size={500}>
          Volunteer.me
        </Heading>
      </blockquote>
      <div className="tab">
        Volunteer.me is a global collaboration platform that connects people seeking to volunteer,
        and those who need volunteers.
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

const verto = {
  heading: "Full-Stack Developer",
  status: "Jan. 2021 - Present",
  tags: (
    <>
      <Tags tag={["Verto Health"]} type="w" />
      <br />
      <Tags type="s" tag={["Ruby on Rails", "Angular", "Flask", "Vue", "XState"]} />
    </>
  ),
  body: (
    <>
    </>
  ),
};

const ws = {
  heading: "Incoming Software Engineer",
  status: "May 2021 - August 2021",
  tags: (
    <>
      <Tags tag={["Wealthsimple"]} type="w" />
    </>
  ),
  body: (
    <>
    </>
  ),
};

const ta = {
  heading: "Teaching Assistant",
  status: "Sept. 2020 - Present",
  tags: (
    <>
      <Tags tag={["University of Toronto"]} type="w" />
      <br />
      <Tags type="s" tag={["C", "Python"]} />
    </>
  ),
  body: (
    <ul className="list">
      Winter 2021
      <li class="tab">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://utsc.calendar.utoronto.ca/course/csca48h3"
        >
          CSCA48
        </Link>
        {"  "}- Introduction to Computer Science II
      </li>
      Fall 2020
      <li class="tab">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://utsc.calendar.utoronto.ca/course/csca08h3"
        >
          CSCA08
        </Link>
        {"  "}- Introduction to Computer Science I
      </li>
      <li class="tab">
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
        Used Redux Forms to handle form state, and input validation and MaterialUI to format the
        menu.
      </li>
      <li>
        Contributed to a web application that allows students to connect project founders and
        skilled developers members.
      </li>
      <li>
        Programmed a Log-in and Sign-up Menu in React by implementing the Firebase Authentication
        SDK to allow account creation, email verification and profile page customization.
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
      Provided customers with customized advice to satisfy their technological requirements, while
      upselling warranty plans.
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
      Supervised and taught around 15 to 20 different campers about coding concepts using Python, on
      a weekly basis
    </ul>
  ),
};

// projects
const uimpactify = {
  heading: "U Impactify",
  status: "finished!",
  tags: (
    <>
    <Tags type="t" tag={["online learning platform"]} />
    <br/>
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
    </>
  ),
  body: (
    <div>
      <ul className="list">
        Engaged as a full-stack developer in a team of seven using the Agile Scrum methodology with
        Jira to develop U Impactify.
        <br />
        <br />
        U Impactify, the E-Learning platform dedicated to serve the social purpose sector. ​Users
        can use this platform to expand their company, teach, and learn.
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
  tags: <Tags type="s" tag={["Firebase Storage", "React", "Sass", "Evergreen-UI"]} />,
  body: (
    <div>
      <ul className="list">
        This is just a personal website to show my experience and technical skills.
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

const chronolo = {
  heading: "Chronolo-Geese",
  status: "finished!",
  tags: <>
    <Tags type="t" tag={["collaboration tool"]} />
    <br/>
    <Tags type="s" tag={["Firebase", "React", "Google Calendar API"]} />
  </>,
  body: (
    <div>
      <ul className="list">
        Chronolo-Geese​ is a schedule conflict manager designed to help you seamlessly coordinate 
        events between multiple groups.
        <br />
        <br />
        <div className="row">
          <GithubLink url="https://github.com/MLH-Fellowship/Chronolo-Geese" />
          <Live url="https://chronolo-geese.web.app/" />
        </div>
      </ul>
    </div>
  ),
};

const shell = {
  heading: "Mock Bash Shell",
  status: "finished!",
  tags: <Tags type="s" tag={["Java", "Object Orientated Programming", "Agile"]} />,
  body: (
    <div>
      <ul className="list">
        Developed in a team of three using the the Agile Scrum methodology that implements core bash
        commands in a Java terminal.
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
  tags: <Tags type="s" tag={["MongoDB", "Express", "React", "Node", "React-vis"]} />,
  body: (
    <div>
      <ul className="list">
        A full-stack web application that keeps track of my day-to-day expenses. Made a REST API
        with the MERN stack to allow the user to create, read, update, and delete their day-to-day
        expenses, while having it visualized using React-vis.
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
  tags: <> 
    <Tags type="t" tag={["fun game"]} />
    <br/>
    <Tags type="s" tag={["Visual Basic"]} />
  </>,
  body: (
    <div>
      <ul className="list">
        Kohina!Run is a relaxing RPG where your ultimate goal is to make a bowl of noodles. You play
        as Kohina to solve puzzling challenges, fight off thieves, and interact with NPCs to find
        and cook ingredients.
        <br />
        <br />
        <div className="row">
          <GetLink name="Kohina!Run.zip" words=""></GetLink>
          <GithubLink url="https://github.com/KohinaTheCat/Kohina-Run" />
          <PageLink link="/about_kohinarun" />
        </div>
      </ul>
    </div>
  ),
};

const spotify_api_clone = {
  heading: "Spotify API Clone",
  status: "finished!",
  tags: <Tags type="s" tag={["Java", "Spring Boot", "MongoDB", "Neo4j"]} />,
  body: (
    <div>
      <ul className="list">
        a REST API for a Spotify-like music application that utilizes the Java Spring Boot framework
        and microservices supported by MongoDB and Neo4j. It supports features such as profile
        creation, following and unfollowing, liking and unliking songs, adding songs to a playlist,
        and getting the liked songs of your friends.
        <br />
        <br />
        <div className="row">
          <GithubLink url="https://github.com/KohinaTheCat/Spotify-API-Clone" />
          <Live url="https://navn.me/spotify-api-clone/" />
        </div>
      </ul>
    </div>
  ),
};

const the_rottery = {
  heading: "The Rottery",
  status: "updating!",
  tags:
    <> 
      <Tags type="t" tag={["dApp"]} />
      <br/>
      <Tags type="s" tag={["Solidity", "React", "Chai", "Hardhat", "Ethers.js", "OpenZeppelin"]} />
    </>,
  body: (
    <div>
      <ul className="list">
        Source code will be provided upon request.
        <br />
        <br />
        <div className="row">
          <Live url="https://the-rottery.web.app/" />
        </div>
      </ul>
    </div>
  ),
};

// all
export const projects = [
  the_rottery,
  uimpactify,
  spotify_api_clone,
  chronolo,
  shell,
  budgetclara,
  kohinarun,
  website,
];
export const experience = [ws, verto, mlh, ta, dsc, staples, ucc];

// featured
export const projects_featured = [the_rottery, uimpactify, shell, kohinarun];
export const experience_featured = [ws, verto, mlh, ta];

// misc. experience
export const experience_programming = [verto, mlh, dsc];
export const experience_teaching = [mlh, ta, ucc];

//misc. projects
export const projects_web = [the_rottery, uimpactify, chronolo, budgetclara, website];
export const projects_java = [spotify_api_clone, shell];
export const projects_group = [uimpactify, spotify_api_clone, chronolo, shell, kohinarun];
