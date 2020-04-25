import React, { useState } from "react";
import "./Main.css";
import "../components/css/sudoku.css";
// import { DisplayDes } from "../components/DisplayDes"; //why do i have to have this lol
import "../components/css/display.css";
import DisplaySudoku from "../components/DisplaySudoku";
import { Card } from "evergreen-ui";
import { start } from "../components/solver.js";

function Sudoku() {
  let [cooler_array, setCoolArray] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  //   let display = <div></div>

  const solve = () => {
    console.log("before", cooler_array);
    let temp = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        temp[i][j] = cooler_array[i][j];
      }
    }
    start(temp);
    console.log(temp)
    setCoolArray(temp);
  };

  return (
    <div className="Background">
      <div className="Pane">
        <div id="s">Sudoku Solver</div>
      </div>
      <Card className="Intro_Card" margin={24} borderRadius={10}>
        <h4>using backtracking and recursion</h4>
        <br></br>
      </Card>

      {console.log(cooler_array)}
      <DisplaySudoku sudoku={cooler_array}></DisplaySudoku>

      <button onClick={solve}>solve</button>
    </div>
  );
}

export default Sudoku;
