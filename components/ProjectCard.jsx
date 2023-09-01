import React from "react";

const ProjectCard = (props) => {
  return (
    <div class="project_card">
      <p class="project_title">{props.projectName}</p>
      <p class="project_desc">{props.projectDescription}</p>
      <div class="tech_stack_div">
        <p class="tech_stack_header text-[20px] font-extrabold">Tech Stack</p>
        <div class="tech_stacks overflow-x-auto mt-2 gap-3">
          <div class="tech_stack_card">{props.techStack1}</div>
          <div class="tech_stack_card">{props.techStack2}</div>
          <div class="tech_stack_card">{props.techStack3}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
