import React from "react";
import "../components/css/styles.css";
import Sky from "react-sky";
import { Link as L } from "react-router-dom";
import myImage from "../imgs/icon-kohina-opacity.png";
import image2 from "../imgs/cat.png";
import image3 from "../imgs/heart.png";
import GetLink from "../components/GetLink";
import { Card } from "evergreen-ui";

export default function Blog() {
  return (
    <div className="Background">
      <div className="Pane">
        <div className="blog_header" style={{ position: "absolute" }}>
          <Sky
            images={{
              0: myImage,
              1: image2,
              2: image3,
            }}
            how={50}
            time={30} /* time of animation */
            size={"100px"} /* size of the rendered images */
            background={"#ddebf7"}
          />
        </div>
        <L to="/">
          <img src={require("../imgs/return.png")} alt = "home" className="return"></img>
        </L>
        <div className="blog_title">./Kohina!Run</div>
        <div className="blog_subtitle">
          ../an open world RPG in Visual Basic
        </div>
      </div>

      <Card className="blog_card blog_body">
        <li>
          <b>the idea: </b>
          <div className="tab">
            <br />
            This game is my pride and joy and brought so many tears to my eyes.
            This as my first big project and I spent over 100+ hours on it. I
            love it. Inspired by Poptropica!!! so, me and two other people made
            this from scratch, everything was programmed, and drawn by us.
            (probably a reason why it took so long), BUT it was a great learning
            experience. so, it's based on this anime, and you the player plays
            as a girl who needs to collect all the ingredients to make her
            noodles.
          </div>
          <br />
        </li>
        <li>
          <b>what I did:</b>
          <div className="tab">
            <br />
            - all player movement and animation
            <br />
            <br />
            - collision detection
            <br />
            <br />
            - inventory management
            <br />
            <br />
            - saving and loading save-files
            <br />
            <br />
            - I did one mini-game, the last one "cooking". legends say it's
            unbeatable
            <br />
            <br />
            - I coloured in most of the assets interface design
            <br />
            <br />
            - successfully lead a team of three to ensure project deadlines were
            met
            <br />
            <br />
            - learned the process of the software development cycle to optimize
            our time and ensure a high-quality game
            <br />
            <br />
            - developed, tested, integrated and debugged team to guarantee
            smooth and bug-free gameplay
            <br />
          </div>
          <br />
          <br />
        </li>

        <b>unzip and run the .exe</b>
        <GetLink
          name="Kohina!Run.zip"
          words="download the playable game here"
        ></GetLink>
      </Card>
    </div>
  );
}
