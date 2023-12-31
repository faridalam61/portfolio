import React from "react";
import person from "../../assets/person.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-gradient-borders"
        >
          <img
            src={person}
            alt=""
            className="element w-full h-full rounded-full mx-auto"
          />
        </motion.div>

        <h1 className="mt-8 text-black dark:text-white text-4xl font-bold rainbow-text uppercase">
          HI, I'm Farid Alam
        </h1>
        <h2 className="mt-4 text-black dark:text-white text-xl rainbow-text">
          MERN Stack Developer
        </h2>
        <p className="text-white mx-6 lg:mx-96 mt-8">
          I enjoy solving complex problems. Frequently praised as
          detail-oriented by my peers, I can be relied upon to help your company
          achieve its goals by providing sustainable and scalable solutions.
        </p>
        <div className="flex gap-3 justify-center items-center mt-8">
          <Link to="https://github.com/faridalam61">
            <Icon
              icon="mdi:github"
              style={{ color: "white", fontSize: "40px" }}
            />
          </Link>
          <Link to="https://www.linkedin.com/in/faridalam61/">
            <Icon
              icon="mdi:linkedin"
              style={{ color: "white", fontSize: "40px" }}
            />
          </Link>
          <a href="#contact">
            <Icon
              icon="cib:telegram-plane"
              style={{ color: "white", fontSize: "40px" }}
            />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mx-6 lg:mx-0 gap-9 mt-8 mb-10">
          <a
            href="#projects"
            className=" text-[#01cbb4] text-xl py-3 px-6 rounded-sm font-semibold w-full lg:w-auto justify-center border border-[#435160] flex gap-2 hover:bg-[#113134]"
          >
            <Icon
              icon="ph:code"
              style={{ color: "#01cbb4", fontSize: "30px" }}
            />
            See My Works
          </a>
          <Link
            to="https://drive.google.com/uc?export=download&id=1_IpkaJorKUA-KGSURIA2wMyVqfwD3i6e"
            className="bg-[#01FEE2] text-[#161b1f] text-xl py-3 px-6 rounded-sm font-semibold flex gap-2 hover:bg-[#01CBB4] w-full lg:w-auto justify-center"
          >
            <Icon
              icon="material-symbols:download"
              style={{ color: "#161b1f", fontSize: "30px" }}
            />
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
