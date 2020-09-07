import React from "react";


const invalid = {
  borderColor: "red"
};
export default function AppInput(props) {

  return (
    <div>
      <label className="card_input_label">
        {props.label}{" "}
        {props.mandatory ? <span style={{ color: "red" }}>*</span> : ""}
      </label>
      <input
        id={props.id}
        type={props.type === "password" ? "password" : "text"}
        className="card_input"
        style={props.validation === "invalid" ? invalid : {}}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
