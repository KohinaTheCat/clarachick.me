import React from "react";
import "../components/css/styles.css";
import { Link } from "evergreen-ui";

//Clara Chick
function OhNo() {
  return (
    <div className="Background">
      <div className="error_img" />
      looks like this page doesn't exist. if you want it to, email me!
      <br />
      <Link href="https://clarachick.me/">go back to the main page</Link>
    </div>
  );
}

export default OhNo;
