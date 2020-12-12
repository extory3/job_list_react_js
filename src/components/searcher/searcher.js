import React, { Component } from "react";
import "./searcher.css";
const job_type_items = ["Engineering", "Design", "Marketing", "IT", "Business"];
const n = job_type_items.length;

class Searcher extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: [false, false, false, false, false] };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (index) => {
    var getState = this.state.isToggleOn;
    if (this.state.isToggleOn[index] == true) getState[index] = false;
    else getState[index] = true;
    this.setState({ isToggleOn: getState });
  };
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
              {job_type_items.map((a, index) => {
                return (
                  <li
                    key={a}
                    className={this.state.isToggleOn[index] ? "isOn" : "isOff"}
                    onClick={this.handleClick.bind(this, index)}
                  >
                    {a}
                  </li>
                );
              })}
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
const MyForm = () => {
  return (
    <section>
      <form>
        <input></input>
      </form>
    </section>
  );
};
export default Searcher;
