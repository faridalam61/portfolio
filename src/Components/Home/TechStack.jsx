import React from "react";
import { Icon } from "@iconify/react";
import coder from "../../assets/coder.png";
import { motion } from "framer-motion";

function TechStack() {
  return (
    <div>
      <div className="container px-4 lg:px-0 mx-auto mb-10 mt-10 lg:mt-20">
        <h2 className="text-center font-normal text-4xl mb-10 lg:mb-0 text-white rainbow-text">
          My Tech Stack
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <img src={coder} alt="" />
          </motion.div>

          <div className="w-full lg:w-1/2 grid grid-cols-3 lg:grid-cols-5 gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="grommet-icons:reactjs"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">React</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="logos:javascript"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">JavaScript</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="devicon:nodejs"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Node</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="simple-icons:express"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Express</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="devicon:mongodb"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">MongoDB</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="teenyicons:nextjs-outline"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">NextJs</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="logos:vitejs"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Vite</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="devicon:tailwindcss"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Tailwind</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="logos:bootstrap"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Bootstrap</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="devicon:sass"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Sass</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="vscode-icons:file-type-html"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">HTML 5</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="vscode-icons:file-type-css"
                mb-4
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">CSS 3</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="vscode-icons:file-type-vscode"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">VS Code</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="logos:npm-icon"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">NMP</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="mdi:github"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Github</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Icon
                icon="devicon:vercel"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Vercel</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Icon
                icon="ic:outline-wordpress"
                style={{ color: "#fff", fontSize: "40px" }}
                className="mx-auto"
              />
              <p className="text-white mt-2 mb-4">Wordpress</p>
            </motion.div>
          </div>
        </div>
      </div>
      <div id="projects"></div>
    </div>
  );
}

export default TechStack;
