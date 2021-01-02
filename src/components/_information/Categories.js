import React, { Component } from "react";
import "../css/skills.css";
import { Card, Heading, Tablist, Tab } from "evergreen-ui";
import Category from "./Category";
import {
  experience,
  experience_featured,
  experience_programming,
  experience_teaching,
  projects,
  projects_featured,
  projects_java,
  projects_web,
  projects_group,
} from "../constants/Body";

export class Categories extends Component {
  state = {
    titles: ["experience", "projects" /*, "misc."*/],
    info: [experience, projects /*, this.side */],
    tabs: [
      ["all", "featured", "programming", "teaching"],
      ["all", "featured", "web-dev", "java", "group / agile"],
    ],
    selectedIndex: [0, 0],
  };

  updateFilter = (index, change) => {
    let temp = this.state.selectedIndex;
    temp[index] = change;
    this.setState({ selectedIndex: temp });

    temp = this.state.info;
    if (index === 0) {
      switch (change) {
        case 0:
          temp[index] = experience;
          break;
        case 1:
          temp[index] = experience_featured;
          break;
        case 2:
          temp[index] = experience_programming;
          break;
        default:
          temp[index] = experience_teaching;
          break;
      }
    } else {
      switch (change) {
        case 0:
          temp[index] = projects;
          break;
        case 1:
          temp[index] = projects_featured;
          break;
        case 2:
          temp[index] = projects_web;
          break;
        case 3:
          temp[index] = projects_java;
          break;
        default:
          temp[index] = projects_group;
          break;
      }
    }

    this.setState({ info: temp });
  };

  render() {
    return (
      <div className="Background">
        {this.state.titles.map((title, index) => (
          <Card className="Card_main hover" elevation={1} key={title} margin={24} width="80%">
            <Card className="Card Card2" elevation={1} key={title} margin={24}>
              <Card className="Card Card3" elevation={1} key={title} margin={24}>
                <Heading size={600} is="h3" id="f">
                  {title}
                  <Tablist key={title} marginBottom={16} flexBasis={240} marginRight={24}>
                    <br />
                    {this.state.tabs[index].map((tab, i) => (
                      <Tab
                        key={title + tab + i}
                        id={tab}
                        onSelect={() => this.updateFilter(index, i)}
                        isSelected={i === this.state.selectedIndex[index]}
                        aria-controls={`panel-${tab}`}
                      >
                        {tab}
                      </Tab>
                    ))}
                  </Tablist>
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
