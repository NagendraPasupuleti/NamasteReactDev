import React, { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="data:image/png;base64,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"
      alt="Foot villa image"
    />
  </a>
);

export const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const authUser = () => {
  //   setIsAuthenticated(false ? true : false);
  // };
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home </li>
          </Link>
          <Link to="/about">
            <li>About </li>
          </Link>
          <Link to="/contact">
            <li>Contact </li>
          </Link>
          <Link to="/cart">
            <li>Cart </li>
          </Link>
          {isAuthenticated ? (
            <button onClick={() => setIsAuthenticated(false)}>LogOut</button>
          ) : (
            <button onClick={() => setIsAuthenticated(true)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};
