import React, { Component } from "react";
import "./searcher.css";
class Searcher extends Component {
  render() {
    return (
      <section className="searcher_container">
        <MyForm />
      </section>
    );
  }
}
class MyForm extends Component {
  render() {
    return (
      <form>
        <select>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    );
  }
}
export default Searcher;
