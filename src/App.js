import React, { version } from "react";
import Main from "./Pages/Main";
import ScrolltoTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <>
      <ScrolltoTop></ScrolltoTop>
      <Main></Main>
    </>
  );
}

export default App;
