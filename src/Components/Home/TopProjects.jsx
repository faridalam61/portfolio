import React from "react";
import ProjectCard from "../Shared/ProjectCard";
import porject1 from "../../assets/projects/project-1.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function TopProjects() {
  return (
    <div className="my-10" id="projects">
      <div className="container mx-auto mt-32">
        <h2 className="text-4xl text-center font-light text-white mb-4">
          Projects
        </h2>
        <p className="text-white text-center mb-14">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          nihil.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 container mx-auto">
        <ProjectCard
          image={porject1}
          title="Personal Porfolio website"
          description="This is a portfolio website developed for myself. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, libero."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "devicon:tailwindcss",
          ]}
        />
        <ProjectCard
          image={porject1}
          title="Personal Porfolio website"
          description="This is a portfolio website developed for myself. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, libero."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "devicon:tailwindcss",
          ]}
        />
        <ProjectCard
          image={porject1}
          title="Personal Porfolio website"
          description="This is a portfolio website developed for myself. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, libero."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "devicon:tailwindcss",
          ]}
        />
        <ProjectCard
          image={porject1}
          title="Personal Porfolio website"
          description="This is a portfolio website developed for myself. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, libero."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "devicon:tailwindcss",
          ]}
        />
        <ProjectCard
          image={porject1}
          title="Personal Porfolio website"
          description="This is a portfolio website developed for myself. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, libero."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "devicon:tailwindcss",
          ]}
        />
        <ProjectCard
          image={porject1}
          title="Personal Porfolio website"
          description="This is a portfolio website developed for myself. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, libero."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "devicon:tailwindcss",
          ]}
        />
      </div>
      <div className="container mx-auto px-6 lg:px-0 flex flex-col items-center">
        <Link
          to="/projects"
          className=" text-[#01cbb4] text-xl py-3 px-6 rounded-sm font-semibold w-full lg:w-auto justify-center border border-[#435160] flex gap-2 hover:bg-[#113134] mt-8"
        >
          <Icon icon="ph:code" style={{ color: "#01cbb4", fontSize: "30px" }} />
          View All Projects
        </Link>
      </div>
    </div>
  );
}

export default TopProjects;
