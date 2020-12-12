import React from "react";
import "../css/skills.css";
import CategoryCard from "./CategoryCard";

function Skills(props) {
  return (
    <div>
      {props.info.map((item, index) => (
        <CategoryCard
          heading={item.heading}
          key={item.heading}
          status={item.status}
          body={item.body}
          tags={item.tags}
          i={index}
        ></CategoryCard>
      ))}
    </div>
  );
}

export default Skills;
