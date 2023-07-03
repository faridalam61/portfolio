import React from "react";
import Hero from "../../Components/Home/Hero";
import TechStack from "../../Components/Home/TechStack";
import TopProjects from "../../Components/Home/TopProjects";
import Contact from "../../Components/Home/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <TechStack />
      <TopProjects />
      <Contact/>
    </div>
  );
}

export default Home;
