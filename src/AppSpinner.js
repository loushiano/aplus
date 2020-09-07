import React, { useState } from "react";
import ReactSpinner from 'react-bootstrap-spinner'

export default function AppSpinner(props) {

  return (
    <div className={props.show?"spinner_parent":"hidden"}>
         <ReactSpinner className="spinner" type="border" color="primary" size={props.show?"12":"0"} />
  </div> 
  );
}
