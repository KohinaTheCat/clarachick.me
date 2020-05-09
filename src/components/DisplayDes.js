import React, { Component } from "react";
import { Link } from "evergreen-ui";
import { Card } from "evergreen-ui";
import "./css/styles.css";
import Skills from "../components/Skills";
import GetLink from "./GetLink";

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
          <li>
            funny story: this website was made 3 times.
            <br />
            <br />
            <b>1.</b> when I was back in high-school and I made it on Wordpress.
            It's still up at {"  "}
            <Link href="https://cluura.wordpress.com/" target="_blank">
              https://cluura.wordpress.com/
            </Link>
            <br />
            <br />
            <b>2.</b> when I was first learning about web-dev, back in Nov.
            2019. It was supposed to replace my Wordpress website, the website
            layout was very similar, but it was poorly made, not responsive and
            I didn't think it fully reflected myself in terms of design.
            <br />
            <br />
            <b>3.</b> this iteration. I would say it's the best (ofc it is, it's
            the one you're seeing). I made this website responsive, it passes
            the {"  "}
            <Link href="http://ami.responsivedesign.is/" target="_blank">
              http://ami.responsivedesign.is/
            </Link>
            {"  "} test! Also a unique design which I like. It is simple and
            full of warm colours, a relection of who I think I am.
            <br />
            <br />
            <b>Side Note:</b> yes I know I should probably make each of my
            descriptions on another page, so it's not one big long page, but I
            like that you just need to scroll to view everything else, and not
            have to click and go back etc. kind of like Instagram???
          </li>
          <li>
            thank you to{" "}
            <Link href="https://github.com/lucagez/sky" target="_blank">
              Sky API
            </Link>{" "}
            for the amazing animated background
          </li>
          <li>
            simple React Router for an error page. Go check it out! type in a
            random subpage and see what you find!
          </li>
          <li>
            all files are hosted on Firebase, such that download links are
            generated on demand.
          </li>
          <li>
            used SASS and EvergreenUI to achieve a simple, yet visually pleasing
            website design that is responsive and unique
          </li>
          <li>
            ;earned the fundamentals of ReactJS such as state, hooks, and
            component reusability
          </li>
          <Link href="https://github.com/KohinaTheCat/DrawView" target="_blank">
            you can review the code on my GitHub
          </Link>
        </ul>
      </div>,
      <div>
        <ul className="list">
          <li>
            trying to make an app that will help you learn to draw... more
            updates later
          </li>
          <li>
            <b>what I have now:</b> nice animated home screen, access to camera,
            able to get image from storage, and an overlay on the camera. It can
            overlay the image over the camera view so you can "trace" what you
            want to draw, or make sure your current drawing is on-track with
            your reference. The image overaly "tilts" depending on the position
            of your phone so the FOV of the image matches your drawing no matter
            the angle
          </li>
          <li>
            <b>what I want to do:</b> add an edge detection so it actually
            plants the image on the paper and not just have it floating there.
          </li>
          <li>
            <b>problems:</b> lack of time, expo doesn't support any edge
            detection APIs and I'm having trouble with my "pure" React-Native
            version of the app. (made one using the expo API and one without). I
            couldn't install the edge detection API, even googling the error
            didn't help. I'll fix it one day... one day soon.
          </li>
          <Link
            href="https://github.com/KohinaTheCat/clarachick.me"
            target="_blank"
          >
            you can review the code on my GitHub
          </Link>
        </ul>
      </div>,
      <div>
        <ul className="list">
          <li>
            This game is my pride and joy and brought so many tears to my eyes.
            This as my first big project and I spent over 100+ hours on it. I
            love it. Inspired by Poptropica!!!
          </li>
          <li>
            <b>what's up with this game?</b> so, me and two other people made
            this from scratch, everything was programmed, and drawn by us.
            (probably a reason why it took so long), BUT it was a great learning
            experience.
            <br />
            <br />
            so, it's based on this anime, and you the player plays as a girl who
            needs to collect all the ingredients to make her noodles.
          </li>
          <b>what I did:</b>
          <br />
          <br />
          <li>all player movement and animation</li>
          <li>collision detection</li>
          <li>inventory management</li>
          <li>saving and loading save-files</li>
          <li>
            I did one mini-game, the last one "cooking". legends say it's
            unbeatable
          </li>
          <li>I coloured in most of the assets</li>
          <li>interface design</li>
          <li>
            successfully lead a team of three to ensure project deadlines were
            met
          </li>
          <li>
            learned the process of the software development cycle to optimize
            our time and ensure a high-quality game
          </li>
          <li>
            developed, tested, integrated and debugged team to guarantee smooth
            and bug-free gameplay
          </li>
          <br />
          <b>unzip and run the .exe</b>
          <GetLink
            name="Kohina!Run.zip"
            words="download the playable game here"
          ></GetLink>
        </ul>
      </div>,
      <div className="">
        <ul>
          <div className="">
            <b>2019 - An IO game using NodeJS</b>
            <ul></ul>
          </div>
          <br />
          <br />
          <div className="">
            <b>2019 - RPG with 2D Unity</b>
            <ul></ul>
          </div>
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
