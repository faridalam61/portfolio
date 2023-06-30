import React from "react";
import { Icon } from "@iconify/react";

function ProjectCard({ image, title, description, icons }) {
  console.log(icons);
  return (
    <div className="rainbow-box relative bg-[#161B1F]">
      <div className="screen">
        <img src={image} alt="" />
      </div>
      <div className="px-6 pt-6">
        <h2 className="text-white text-2xl font-light">{title}</h2>
        <p className="text-white text-md mt-4">{description}</p>
      </div>
      <div className="p-6 flex gap-6">
        {icons.map((logo, idx) => (
          <Icon
            key={idx}
            icon={logo}
            style={{ color: "#fff", fontSize: "25px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
