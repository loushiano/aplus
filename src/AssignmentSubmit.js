import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AppButton from "./AppButton";
import axios from "axios";
import { errorHappened } from "./redux/dialogActions";
import AppInput from "./AppInput";
import AppSpinner from "./AppSpinner";
import { Tick } from "react-crude-animated-tick";

function ValidateEmail(mail) {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
  ) {
    return true;
  }
  return false;
}

export default function AssignmentSubmit() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [instruction, setInstruction] = useState("");
  const [email, setEmail] = useState({
    value: "",
    validation: ""
  });
  const [show, setShow] = useState(false);

  const validate = (file, email) => {
    return file !== null && email.value !== "" && email.value.includes("@");
  };

  const onChangeHandler = file => {
    setFile(file);
  };
  const submitFile = () => {
    let validEmail = ValidateEmail(email.value);
    if (validate(file, email) && validEmail) {
      setShow(true);
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post(
          "http://apluslusluslusapi.cfapps.io/aplus/assignment/submit?email=" +
            email.value +
            "&instructions=" +
            instruction,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(res => {
          setShow(false);
          dispatch(errorHappened(""));
          setCompleted(true);
        })
        .catch(error => {
          setShow(false);
          dispatch(
            errorHappened(
              "Something wrong has happened, please try again later"
            )
          );
        });
    } else {
      if (!validEmail) {
        setEmail({ value: email.value, validation: "invalid" });
        return dispatch(errorHappened("Please enter a valid email address"));
      }

      dispatch(errorHappened("Please fill in all requred information"));
    }
  };

  const hanldeChange = value => {
    setEmail({ validation: "", value: value });
  };

  const handleInstrChange = value => {
    setInstruction(value);
  };

  const form = () => {
    return (
      <div>
        <div style={{ marginBottom: "20px" }}>
          Enter Your Email And Attach Your Assignment{" "}
        </div>

        <AppInput
          label="Email"
          validation={email.validation}
          onChange={event => hanldeChange(event.target.value)}
        ></AppInput>
        <input
          type="file"
          name="file"
          accept="application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={event => onChangeHandler(event.target.files[0])}
        />
        <div style={{ marginTop: "20px" }}>
          <div>
            <label for="w3review">Instructions:</label>
          </div>
          <textarea
            name="instructions"
            id="instructions"
            onChange={event => handleInstrChange(event.target.value)}
          ></textarea>
        </div>
        <div style={{ marginTop: "20px", width: "100%" }}>
          <AppButton
            name="submit"
            className="full"
            onClick={() => submitFile()}
          ></AppButton>
        </div>
      </div>
    );
  };

  const complete = () => {
    return (
      <div>
        <div>
          <Tick size={200} />
        </div>
        <div>
          We are currently working on your assignment, please wait for us to
          contact you soon! Have a good day!
        </div>
      </div>
    );
  };

  return (
    <div className="submit_dialog">
      {completed ? complete() : form()}
      <AppSpinner show={show}></AppSpinner>
    </div>
  );
}
