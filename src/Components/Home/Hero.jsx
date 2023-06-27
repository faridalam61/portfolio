import React from "react";
import person from "../../assets/person.png";

function Hero() {
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <div>
        <img src={person} alt="" className="w-40 h-40 rounded-full mx-auto" />
        <h1 className="mt-6 text-black dark:text-white text-4xl font-bold">
          HI, I'm Farid Alam
        </h1>
        <h2 className="mt-6 text-black dark:text-white text-xl font-semibold">
          MERN Stack Developer
        </h2>
      </div>
    </div>
  );
}

export default Hero;
