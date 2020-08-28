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
        
      </div>
    </>
  );
}

export default Footer;
