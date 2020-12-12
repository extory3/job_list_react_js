import React from "react";
import JobList from "../components/job_list/job_list.js";
import Searcher from "../components/searcher/searcher";
const Home = () => {
  return (
    <div>
      <Searcher />
      <JobList />
    </div>
  );
};

export default Home;
