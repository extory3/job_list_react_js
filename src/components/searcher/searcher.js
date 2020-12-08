import React, { Component } from "react";
import "./searcher.css";
class Searcher extends Component {
  render() {
    return (
      <section className="searcher_container">
        <div className="left_filter">
          <section className="location_filter">
            <p>Location</p>
          </section>
          <section className="job_type">
            <p>Job Type</p>
            <ul>
              <li>Engineering</li>
              <li>Design</li>
              <li>Marketing</li>
            </ul>
          </section>

          <section className="english_level">
            <p>English Level</p>
            <ul>
              <li>Not required</li>
              <li>Fluent</li>
              <li>Conversational</li>
              <li>Business Level</li>
            </ul>
          </section>
        </div>
        <MyForm />
      </section>
    );
  }
}
class MyForm extends Component {
  render() {
    return (
      <section>
        <form>
          <input></input>
        </form>
      </section>
    );
  }
}
export default Searcher;
