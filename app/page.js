import ProjectCard from "@/components/ProjectCard";

import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex text-white justify-evenly items-center px-[30px] mt-[30px]">
        <div>
          <img id="pic" src="" alt="" />
        </div>
        <div className="flex-col">
          <p className="text-[70px] font-bold mb-[30px]">Divyakrishnan</p>
          <p>
            Enthusiastic and creative minded developer who can learn things much
            faster
          </p>
        </div>
      </div>

      <p className="text-[80px] mt-[50px] mb-[50px] ml-[60px] mr-[60px] text-white">
        Projects
      </p>

      <div className="project_div overflow-x-auto ">
      <div className="flex justify-between ml-[60px] w-[1200px] gap-8">
        <ProjectCard
          projectName="XRP-Commerce"
          projectDescription="Web3 Marketplace made on XRPL where users can buy and sell their products independently."
          techStack1="NextJS"
          techStack2="XRPL"
          techStack3="Supabase"
        />
        <ProjectCard
          projectName="XRP-Commerce"
          projectDescription="Web3 Marketplace made on XRPL where users can buy and sell their products independently."
          techStack1="NextJS"
          techStack2="XRPL"
          techStack3="Supabase"
        />
        <ProjectCard
          projectName="XRP-Commerce"
          projectDescription="Web3 Marketplace made on XRPL where users can buy and sell their products independently."
          techStack1="NextJS"
          techStack2="XRPL"
          techStack3="Supabase"
        />
        <ProjectCard
          projectName="XRP-Commerce"
          projectDescription="Web3 Marketplace made on XRPL where users can buy and sell their products independently."
          techStack1="NextJS"
          techStack2="XRPL"
          techStack3="Supabase"
        />
        </div>
        </div>

      <div className="h-40"></div>
    </div>
  );
};

export default page;
