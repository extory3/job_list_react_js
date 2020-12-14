import React, { Component } from "react";
import "./searcher.css";
const job_type_items = ["Engineering", "Design", "Marketing", "IT", "Business"];
const english_level = [
  "Not Required",
  "Fluent",
  "Conversational",
  "Business Level",
];
const korean_level = [
  "Not Required",
  "Fluent",
  "Conversational",
  "Business Level",
];
const n = job_type_items.length + english_level.length;

class Searcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // ListOfButtons(props) {
  //   return (
  //     <section>
  //       <p>{props.title}</p>
  //       <ul>
  //         {korean_level.map((a, index) => {
  //           return <li>{a}</li>;
  //         })}
  //       </ul>
  //     </section>
  //   );
  // }

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
            <ul>
              <li>WE</li>
              <li></li>
            </ul>
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
              {english_level.map((a, index) => {
                return (
                  <li
                    key={a}
                    className={
                      this.state.isToggleOn[index + job_type_items.length]
                        ? "isOn"
                        : "isOff"
                    }
                    onClick={this.handleClick.bind(
                      this,
                      index + job_type_items.length
                    )}
                  >
                    {a}
                  </li>
                );
              })}
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
