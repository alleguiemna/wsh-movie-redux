import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="menu">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/add">
          {" "}
          <li>Add Movie</li>{" "}
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
