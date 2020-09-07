import React from "react";
import { useDispatch} from "react-redux";
import logo from "./logo.png";
import Review from "./Review";
import { ABOUT, changeDisplay } from "./redux/AppActions";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div className="sticky" id="header_image">
      {" "}
      <div id="top_header">
        <img src={logo} alt="Writer" className="logo" id="logo1" />
        <span className="num_header clickeable" onClick={()=>dispatch(changeDisplay(ABOUT))}> ABOUT US</span>
        <div className="num_header">+1 888-322-3123</div>
        <img src={logo} alt="Writer" className="logo" id="logo2" />
      </div>
     
      <div className="review_parent">
        <div className="inlineClass">
          <span className="boldClass">Ahmed:</span> <Review rating={4}></Review>
          <div className="reviewing">
            Outstanding service!  All questions were answered in a timely
            fashion and the assignment was completed ahead of schedule.  Will
            absolutely use again.
          </div>
        </div>

        <div className="inlineClass">
          <span className="boldClass"> Emily:</span>
          <Review rating={5}></Review>
          <div className="reviewing">
            These writers are great! They pay close attention to detail and
            assignments analysis. So far I have had great grades!
          </div>
        </div>
        <div className="inlineClass">
          <span className="boldClass">Sierra:</span>
          <Review rating={5}></Review>
          <div className="reviewing">
            Best site since I have started posting my papers. I was referred by
            a friend and the company has never disappointed me. Thank you for
            coming a long
          </div>
        </div>
      </div>
    </div>
  );
}
