import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function ProjectCard({ image, title, description, icons, github, liveLink }) {
  console.log(icons);
  return (
    <div className="rainbow-box relative bg-[#161B1F]">
      <div className="screen">
        <img src={image} alt="" />
      </div>
      <div className="px-6 pt-6">
        <h2 className="text-white text-2xl font-normal rainbow-text">
          {title}
        </h2>
        <p className="text-white text-md mt-4">{description}</p>
      </div>
      <div className="flex justify-between p-6 ">
        <div className="flex gap-4">
          {icons.map((logo, idx) => (
            <Icon
              key={idx}
              icon={logo}
              style={{ color: "#fff", fontSize: "25px" }}
            />
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {github && (
            <Link to={github} target="_blank">
              <Icon
                icon="mdi:github"
                style={{ color: "#fff", fontSize: "25px" }}
              />
            </Link>
          )}
          <Link to={liveLink} target="_blank">
            <Icon
              icon="ion:open-outline"
              style={{ color: "#fff", fontSize: "25px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
