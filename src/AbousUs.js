import React from "react";
import { useDispatch } from "react-redux";
import { changeDisplay, HOME } from "./redux/AppActions";

export default function AboutUs() {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="go_back_button"
        onClick={() => dispatch(changeDisplay(HOME))}
      >
        {" "}
        Go Back
      </div>
      <div className="about_us">
        <div className="header_main">
          <span>Writing Services</span>
        </div>
        <div className="explanation">
          Hoping to get a new business off the ground? Want to take your venture
          to the next level? Are you a student in need of writing help? Or you
          have a passion project that you have spent a lifetime wanting to
          write?
          <br></br>
          <b>We can help!</b>
          <br></br>
          Our services are always here to assist you! Just press the
          “RequestHelp” button, fill in your order form providing instructions
          and we will choose the most suitable writer for your project. We are
          available 24/7 to answer your questions and begin working on your
          assignment immediately.<br></br> <br></br>
          Our writers are MA and Phd graduates with over a decade of
          professional writing, editing and tutoring experience and a passion
          for helping you and many others excel in your academic studies.
        </div>
        <div className="header">
          <span>Student Essay writing Services</span>
        </div>
        <div className="explanation">
          We offer editing and tutoring services to students, and produce 100%
          genuine essays and papers for all the following, and many other,
          topics of study: Sociology, Criminology, Political science,
          international relations, Anthropology, Law and English.<br></br>{" "}
          Please contact me today for a free quote and let’s talk about how to
          fast-track your goals!{" "}
          <ul>
            <li className="list">How fast can you do my essay?</li>
          </ul>{" "}
          Since we have a great base of competent writing professionals, we can
          find the most suitable writer for your task at any time. You can set
          the time when you need the task to be completed while creating your
          order. By the way, we work even with those orders that have{" "}
          <b>3-hours deadlines.</b>
        </div>
        <div className="header">
          <span>Programming Services</span>
        </div>
        <div className="explanation">
          We have a team of IT engineers who are conversant with all aspects of
          computer programming assignment help, networking assignment help and
          hosting of websites assignment help. They have all the knowledge you
          need in your IT assignments, and they will complete your work in a
          timely and professional manner. They understand the needs of your
          assignment, and they will align the completed work with the goals of
          the assignment.
          <br>
          </br>
          <br>
          </br>
            Our assignments are written by the best IT assignment experts and
            are 100% original; our experts complete your work beginning from the
            very scratch, and they do it in a professional manner. So, order now
            from our IT Assignment help services today and get the most reliable
            IT assignment help, right at your doorsteps.
        </div>
      </div>
    </div>
  );
}
