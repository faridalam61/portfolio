import React from "react";
import ProjectCard from "../Shared/ProjectCard";
import porject4 from "../../assets/projects/project-4.png";
import porject2 from "../../assets/projects/project-2.png";
import porject3 from "../../assets/projects/project-3.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function TopProjects() {
  return (
    <div className="my-10">
      <div className="container px-6 lg:px-0 mx-auto mt-32">
        <h2 className="text-4xl text-center font-normal text-white mb-4 rainbow-text">
          Projects
        </h2>
        <p className="text-white text-center mb-14">
          Here is some mern stack projects that I've completed recently
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 lg:px-0 container mx-auto"
      >
        <ProjectCard
          image={porject2}
          title="Food Hub - Recipe hunter website"
          description="Food Hub is a recipe website. Anyone can create an account and share recipes."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "simple-icons:express",
            "bxl:mongodb",
            "devicon:tailwindcss",
          ]}
          github="https://github.com/faridalam61/food-hub-client"
          liveLink="https://food-hub-6c467.web.app/"
        />

        <ProjectCard
          image={porject3}
          title="Yoga Fit – Course enrollment website "
          description="Yoga Fit is a Course enrollment website where users can create accounts and purchase
courses."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "simple-icons:express",
            "bxl:mongodb",
            "devicon:tailwindcss",
          ]}
          github="https://github.com/faridalam61/Yoga-Fit"
          liveLink="https://summer-camp-school-645ed.web.app/"
        />

        <ProjectCard
          image={porject4}
          title="Little Racer – Toy marketplace website  "
          description="Little Racer is a simple toy marketplace website. Built with React, ExpressJs, MonogDB, and
Tailwind CSS."
          icons={[
            "grommet-icons:reactjs",
            "devicon:nodejs",
            "simple-icons:express",
            "bxl:mongodb",
            "devicon:tailwindcss",
          ]}
          github="https://github.com/faridalam61/toy-marketplace"
          liveLink="https://toy-car-e96c2.web.app/"
        />
      </motion.div>
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
