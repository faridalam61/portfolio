import React from "react";
import ProjectCard from "../Shared/ProjectCard";
import porject1 from "../../assets/projects/project-1.png";
import porject2 from "../../assets/projects/project-2.png";
import porject3 from "../../assets/projects/project-3.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function TopProjects() {
  return (
    <div className="my-10">
      <div className="container px-6 lg:px-0 mx-auto mt-32">
        <h2 className="text-4xl text-center font-normal text-white mb-4 rainbow-text">
          Projects
        </h2>
        <p className="text-white text-center mb-14">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          nihil.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-0 container mx-auto">
        <ProjectCard
          image={porject1}
          title="Personal Porfolio website"
          description="This is a portfolio website developed for myself. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, libero."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "devicon:tailwindcss",
          ]}
          github="http://github.com"
          liveLink="#"
        />
        <ProjectCard
          image={porject2}
          title="Personal Porfolio website"
          description="This is a portfolio website developed for myself. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, libero."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "devicon:tailwindcss",
          ]}
        />
        <ProjectCard
          image={porject3}
          title="Personal Porfolio website"
          description="This is a portfolio website developed for myself. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, libero."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "devicon:tailwindcss",
          ]}
          github="http://github.com"
          liveLink="#"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-0 flex flex-col items-center">
        <Link
          to="/projects"
          className=" text-[#01cbb4] text-xl hidden py-3 px-6 rounded-sm font-semibold w-full lg:w-auto justify-center border border-[#435160] flex gap-2 hover:bg-[#113134] mt-8"
        >
          <Icon icon="ph:code" style={{ color: "#01cbb4", fontSize: "30px" }} />
          View All Projects
        </Link>
      </div>
      <div id="contact"></div>
    </div>
  );
}

export default TopProjects;
