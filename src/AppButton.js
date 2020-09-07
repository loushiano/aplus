import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";

export default function AppButton(props) {
  const dispatch = useDispatch();
  return (
    <Button
      className={"app_button "+ props.className}
      onClick={() => props.useDispatch?dispatch(props.onClick()):props.onClick()}
    >
      {props.name}
    </Button>
  );
}
