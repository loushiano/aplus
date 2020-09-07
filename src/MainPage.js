import React from "react";
import AppButton from "./AppButton";
import { useDispatch,useSelector } from "react-redux";
import AboutUs from "./AbousUs";
import { showDialog } from "./redux/dialogActions";
import AssignmentSubmit from "./AssignmentSubmit";
import writer from "./writer.png";
import { HOME } from "./redux/AppActions";

export default function MainPage() {
  const dispatch = useDispatch();
  const display = useSelector(state => state.AppReducer.display);
  return (
    display===HOME? page(dispatch):<AboutUs/>
  );
}

export function page(dispatch) {
 return( <div
 className="main_page_parent"
>
  <div className="main_page">
    <div
      className="image_main"
    >
      <img src={writer} className="side_image"></img>
    </div>
    <div className="middle_text">
      <div className="middle_text_first">
        <div>
          <h3 style={{ textAlign: "left" }}>
            Get Your Assignment Solved In 5 Easy Steps:
          </h3>
        </div>
        <ol>
          <li>Click On Request Help</li>
          <li>Input You Email And Attach Your Assignment</li>
          <li>Add Any Special Instructions To Us</li>
          <li>Click On Submit</li>
          <li>Get Contacted By One Of Our Members</li>
        </ol>
        <div style={{ marginTop: "40px" }}>
          <AppButton
            name="Request Help"
            className="help"
            onClick={() =>
              dispatch(
                showDialog(<AssignmentSubmit />, "Submit Assignment")
              )
            }
          ></AppButton>
        </div>
      </div>
    </div>

    <div
      
      className="image_main"
    >
      {" "}
      <img src={writer} className="side_image"></img>
    </div>
  </div>
</div>)
}
