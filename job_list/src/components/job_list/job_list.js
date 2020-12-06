import React, { Component } from "react";
import { ReactComponent as PinSVG } from "./pin.svg";
class JobList extends Component {
  render() {
    return (
      <section className="jobInstance">
        <JobInstance title="Software Engineer, Front-end" />{" "}
        <JobInstance title="Software Engineer, Back-end" />
        <JobInstance title="AI Researcher" />
        <JobInstance title="" />{" "}
      </section>
    );
  }
}

const JobInstance = (props) => {
  return (
    <article className="job_box">
      <img
        className="logo"
        src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
        alt=""
      />
      <h2 className="position_name">{props.title}</h2>
      // experience level :<span>{props.s}</span>
      <div className="tags">
        <span>Tags here</span> <span>Tags here</span> <span>Tags here</span>{" "}
        <span>Tags here</span>
        <span>Tags here</span>
        <span>Tags here</span>
        <span>Tags here</span>
        <span>Tags here</span>
      </div>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className="company_name">Swarm Technologies</p>
      <p className="location_info">
        <PinSVG className="pin_svg" />
        <span>Gamburger, Germany</span>
      </p>
    </article>
  );
};

export default JobList;
