import React from "react";
import ReactDom from "react-dom";
import AppHeader from "./components/header/header.js";
import JobList from "./components/job_list/job_list.js";
//CSS
import "./index.css";
function Index() {
  return (
    <div className="index">
      <AppHeader />
      <JobList />
    </div>
  );
}

ReactDom.render(<Index />, document.getElementById("root"));
