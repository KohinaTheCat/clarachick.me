import React, { Component } from "react";
import "./css/skills.css";
import { Card } from "evergreen-ui";
import Skills from "../components/Skills";
import {job, side, proj} from './constants/Body'

//TODO: shorten this.
export class DisplayDes extends Component {
  job = job;
  side = side;
  proj = proj;
  state = {
    titles: ["experience", "side projects" /*, "misc."*/],
    info: [this.job, this.proj, this.side],
  };

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
          >
            <Card className="Card Card2" elevation={1} key={title} margin={24}>
              <Card
                className="Card Card3"
                elevation={1}
                key={title}
                margin={24}
              >
                <div id="f">{title}</div>
              </Card>
            </Card>
            <div id="p">
              <Skills info={this.state.info[index]}></Skills>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default DisplayDes;
