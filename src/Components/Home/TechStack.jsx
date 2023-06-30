import React from "react";
import { Icon } from "@iconify/react";
import coder from "../../assets/coder.png";

function TechStack() {
  return (
    <div>
      <div className="container px-4 lg:px-0 mx-auto mb-10 mt-10 lg:mt-20">
        <h2 className="text-center font-normal text-4xl mb-10 lg:mb-0 text-white rainbow-text">
          My Tech Stack
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-14">
          <div className="w-full lg:w-1/2">
            <img src={coder} alt="" />
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="text-center">
              <Icon
                icon="grommet-icons:reactjs"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">React</p>
            </div>
            <div className="text-center">
              <Icon
                icon="logos:javascript"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">JavaScript</p>
            </div>
            <div className="text-center">
              <Icon
                icon="devicon:nodejs"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Node</p>
            </div>
            <div className="text-center">
              <Icon
                icon="simple-icons:express"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Express</p>
            </div>
            <div className="text-center">
              <Icon
                icon="devicon:mongodb"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">MongoDB</p>
            </div>
            <div className="text-center">
              <Icon
                icon="teenyicons:nextjs-outline"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">NextJs</p>
            </div>
            <div className="text-center">
              <Icon
                icon="logos:vitejs"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Vite</p>
            </div>
            <div className="text-center">
              <Icon
                icon="devicon:tailwindcss"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Tailwind</p>
            </div>
            <div className="text-center">
              <Icon
                icon="logos:bootstrap"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Bootstrap</p>
            </div>
            <div className="text-center">
              <Icon
                icon="devicon:sass"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Sass</p>
            </div>
            <div className="text-center">
              <Icon
                icon="vscode-icons:file-type-html"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">HTML 5</p>
            </div>
            <div className="text-center">
              <Icon
                icon="vscode-icons:file-type-css"
                mb-4
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">CSS 3</p>
            </div>
            <div className="text-center">
              <Icon
                icon="vscode-icons:file-type-vscode"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">VS Code</p>
            </div>
            <div className="text-center">
              <Icon
                icon="logos:npm-icon"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">NMP</p>
            </div>
            <div className="text-center">
              <Icon
                icon="mdi:github"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Github</p>
            </div>
            <div className="text-center">
              <Icon
                icon="devicon:vercel"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Vercel</p>
            </div>
            <div className="text-center">
              <Icon
                icon="ic:outline-wordpress"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Wordpress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
