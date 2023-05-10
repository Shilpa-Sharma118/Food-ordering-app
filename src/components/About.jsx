import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1> About us page</h1>
      <p>This is a new page created for About us details!!!</p>
      <Outlet />
    </div>
  );
};

export default About;
