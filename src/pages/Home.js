import React from "react";
import JobList from "../components/job_list/job_list.js";
import Searcher from "../components/searcher/searcher";
import Cloud from "../codepen.svg";
const Home = () => {
  return (
    <div>
      <Searcher />
      <JobList />
      <img className="cloud" src={Cloud} alt="cloud" />
    </div>
  );
};

export default Home;
