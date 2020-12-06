import React, { Component } from "react";

import "./header.css";

class AppHeader extends Component {
  render() {
    return (
      <header>
        <div id="logo">JobList</div>
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
