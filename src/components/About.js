import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>Welcome to about us page</h2>
      {/* <Link to="/about/child">child</Link> */}
      <Outlet />
    </div>
  );
};

export default About;
