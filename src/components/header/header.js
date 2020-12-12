import React from "react";
import logo1 from "./logo_transparent.png";
import "./header.css";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <header>
      <Link to="/">
        <div id="logo"></div>
      </Link>
      <Link to="/Jobpostpage">
        <div id="post_job">
          <button type="button" name="button">
            Post Job
          </button>
        </div>
      </Link>
    </header>
  );
};

export default AppHeader;
