import React, { Component } from "react";
import "../css/skills.css";
import { Card, Heading } from "evergreen-ui";
import Category from "./Category";
import { experience, projects } from "../constants/Body";

export class Categories extends Component {
  state = {
    titles: ["experience", "projects" /*, "misc."*/],
    info: [experience, projects, this.side],
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
                <Heading size={600} is="h3" id="f">
                  {title}
                </Heading>
              </Card>
            </Card>

            <div id="p">
              <Category info={this.state.info[index]}></Category>
            </div>
          </Card>
        ))}
      </div>
    );
  }
}

export default Categories;
