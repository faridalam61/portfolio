import React from "react";
import person from "../../assets/person.png";
import { Icon } from "@iconify/react";

function Hero() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <div className="gradient-border" id="box">
          Animated Gradient Border
        </div>

        <img
          src={person}
          alt=""
          className="element w-40 h-40 rounded-full mx-auto"
        />
        <h1 className="mt-6 text-black dark:text-white text-4xl font-bold">
          HI, I'm Farid Alam
        </h1>
        <h2 className="mt-4 text-black dark:text-white text-xl font-semibold">
          MERN Stack Developer
        </h2>
        <p className="text-white mx-96 mt-8">
          I enjoy solving complex problems. Frequently praised as
          detail-oriented by my peers, I can be relied upon to help your company
          achieve its goals by providing sustainable and scalable solutions.
        </p>
        <div className="flex gap-3 justify-center items-center mt-8">
          <Icon
            icon="mdi:github"
            style={{ color: "white", fontSize: "40px" }}
          />
          <Icon
            icon="mdi:linkedin"
            style={{ color: "white", fontSize: "40px" }}
          />
          <Icon
            icon="cib:telegram-plane"
            style={{ color: "white", fontSize: "40px" }}
          />
          <Icon
            icon="academicons:cv-square"
            style={{ color: "white", fontSize: "36px" }}
          />
        </div>
        <div className="flex items-center justify-center gap-9 mt-8">
          <button className=" text-[#01cbb4] text-xl py-3 px-6 rounded-sm font-semibold border border-[#435160] flex gap-2 hover:bg-[#113134]">
            <Icon
              icon="ph:code"
              style={{ color: "#01cbb4", fontSize: "30px" }}
            />
            See My Works
          </button>
          <button className="bg-[#01FEE2] text-[#161b1f] text-xl py-3 px-6 rounded-sm font-semibold flex gap-2 hover:bg-[#01CBB4]">
            <Icon
              icon="material-symbols:download"
              style={{ color: "#161b1f", fontSize: "30px" }}
            />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
