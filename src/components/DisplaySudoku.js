import React from 'react'
import "../Pages/Main.css";
import {TextInput } from "evergreen-ui";

export default function DisplaySudoku(props) {
    return (
        <div className="container">
            {props.sudoku.map((index, i) => (
              <div className="rowC">
                {/* {console.log("array in child", props.sudoku)} */}
                {/* {console.log("index",array[i])} */}
                {index.map((sq, j) => (
                  <TextInput
                    // onChange={e => change_val(e, i, j)}
                    value={props.sudoku[i][j]}
                    key={i * 10 + j}
                    height={50}
                    width={50}
                    margin={"5px"}
                  />
                ))}
              </div>
            ))}

          </div>
    )
}
