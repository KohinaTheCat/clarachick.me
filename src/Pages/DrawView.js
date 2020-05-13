import React from "react";
import "../components/css/styles.css";
import Sky from "react-sky";
import { Link } from "evergreen-ui";

import { Link as L } from "react-router-dom";
import myImage from "../imgs/icon-kohina-opacity.png";
import image2 from "../imgs/cat.png";
import image3 from "../imgs/heart.png";
import { Card } from "evergreen-ui";

export default function DrawView() {
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
        <div className="blog_title">./DrawView</div>
        <div className="blog_subtitle">../React Native</div>
      </div>

      <Card className="blog_card blog_body">
        <li>
          <b>the idea: </b>
          <div className="tab">
            <br />
            trying to make an app that will help you learn to draw... more
            updates later
            <br />
            so it turns out this app idea has been done before, not once nor
            twice but many times......
            <br />
            i'll just make a better version :(
          </div>
          <br />
        </li>
        <li>
          <b>what I have now:</b>
          <div className="tab">
            <br />
            nice animated home screen, access to camera, able to get image from
            storage, and an overlay on the camera. It can overlay the image over
            the camera view so you can "trace" what you want to draw, or make
            sure your current drawing is on-track with your reference. The image
            overaly "tilts" depending on the position of your phone so the FOV
            of the image matches your drawing no matter the angle
          </div>
          <br />
        </li>

        <b>what I want to do:</b>
        <div className="tab">
          <br />
          <li>
            add an edge detection so it actually plants the image on the paper
            and not just have it floating there.
          </li>
          <br />
        </div>

        <b>problems:</b>
        <div className="tab">
          <br />
          <li>
            lack of time, expo doesn't support any edge detection APIs and I'm
            having trouble with my "pure" React-Native version of the app. (made
            one using the expo API and one without). I couldn't install the edge
            detection API, even googling the error didn't help. I'll fix it one
            day... one day soon.
          </li>
          <br />
          <br/>
        </div>

        <Link
            href="https://github.com/KohinaTheCat/clarachick.me"
            target="_blank"
          >
            you can review the code on my GitHub
          </Link>
      </Card>
    </div>
  );
}
