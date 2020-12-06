import React, { Component } from "react";
import logo1 from "./logo_transparent.png";
import "./header.css";

class AppHeader extends Component {
  render() {
    return (
      <header>
        <div id="logo"></div>
        <div id="post_job">
          <button type="button" name="button">
            Post a Job
          </button>
        </div>
      </header>
    );
  }
}

export default AppHeader;
