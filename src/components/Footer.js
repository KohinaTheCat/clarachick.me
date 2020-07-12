import React from "react";
import "./css/styles.css";

//MAKE COMPONENT LATER
import Sky from "react-sky";
import myImage from "../imgs/icon-kohina-opacity.png";
import image2 from "../imgs/cat.png";
import image3 from "../imgs/heart.png";

function Footer(props) {
  return (
    <>
      <div className="footer" style={{ position: "relative" }}>
        <Sky
          images={{
            0: myImage,
            1: image2,
            2: image3,
          }}
          how={30}
          time={50} /* time of animation */
          size={"100px"} /* size of the rendered images */
          background={"#ddebf7"}
        />
        <div className="footer center">
          <div className="footer center">
            <div className="cont">
              <a href="https://www.instagram.com/aaclr60/">
                <img
                  src={require("../imgs/icons/insta.png")}
                  className="icon"
                  alt="insta"
                />
              </a>
            </div>
            <div className="cont">
              <a href="https://www.linkedin.com/in/clara-chick-a1096b191/?originalSubdomain=ca">
                <img
                  src={require("../imgs/icons/link.png")}
                  className="icon"
                  alt="link"
                ></img>
              </a>
            </div>
            <div className="cont">
              <a href="https://github.com/KohinaTheCat">
                <img
                  src={require("../imgs/icons/github.png")}
                  className="icon"
                  alt="github"
                ></img>
              </a>
            </div>
            <div className="cont">
              <a href="mailto:clara.chick@mail.utoronto.ca">
                <img
                  src={require("../imgs/icons/mail.png")}
                  className="icon"
                  alt="email"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
