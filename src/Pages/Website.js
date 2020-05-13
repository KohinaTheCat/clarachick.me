import React from "react";
import "../components/css/styles.css";
import Sky from "react-sky";
import { Link } from "evergreen-ui";
import { Link as L } from "react-router-dom";
import myImage from "../imgs/icon-kohina-opacity.png";
import image2 from "../imgs/cat.png";
import image3 from "../imgs/heart.png";

import { Card } from "evergreen-ui";

export default function Website() {
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
        <div className="blog_title">./clarachick.me</div>
        <div className="blog_subtitle">
          ../Firebase Storage, ReactJS, SASS/Evergreen-UI
        </div>
      </div>

      <Card className="blog_card blog_body">
        <li>
          <br />
          <b>the process: </b>this website was made 3 times.
          <br />
          <br />
          <i>version 1 - </i>
          <div className="tab">
            when I was back in high-school and I made it on Wordpress. It's
            still up at {"  "}
            <Link href="https://cluura.wordpress.com/" target="_blank">
              https://cluura.wordpress.com/
            </Link>
          </div>
          <br />
          <i>version 2 - </i>
          <div className="tab">
            when I was first learning about web-dev, back in Nov. 2019. It was
            supposed to replace my Wordpress website, the website layout was
            very similar, but it was poorly made, not responsive and I didn't
            think it fully reflected myself in terms of design.
          </div>
          <br />
          <i>version 3 - </i>
          <div className="tab">
            I would say it's the best (ofc it is, it's the one you're seeing). I
            made this website responsive, it passes the {"  "}
            <Link href="http://ami.responsivedesign.is/" target="_blank">
              http://ami.responsivedesign.is/
            </Link>
            {"  "} test! Also a unique design which I like.
          </div>
          <br />
          <br />
        </li>
        <li>
          <b>technical details of the current version: </b>
          <div className="tab">
            <br />- the animated header and footer was done with the use of the
            use of the {"  "}
            <Link href="https://github.com/lucagez/sky" target="_blank">
              Sky API
            </Link>
            <br />
            <br />
            - implemented React Router. Go check out the error page! type in a
            random subpage and see what you find!
            <br />
            <br />
            - all files are hosted on Firebase, such that download links are
            generated on demand.
            <br />
            <br />
            - used SASS and EvergreenUI to achieve a simple, yet visually
            pleasing website design that is responsive and unique
            <br />
            <br />- learned the fundamentals of ReactJS such as state, hooks,
            and component reusability
          </div>
          <br />
          <br />
        </li>
        <Link href="https://github.com/KohinaTheCat/DrawView" target="_blank">
          you can review the code on my GitHub
        </Link>
      </Card>
    </div>
  );
}
