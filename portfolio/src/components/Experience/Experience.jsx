import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        {skills.map((skill, id) => (
          <div key={id}>
            <div>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
          </div>
        ))}
        <ul></ul>
      </div>
    </section>
  );
};
