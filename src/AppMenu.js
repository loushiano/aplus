import React from 'react';
import Button from '@material-ui/core/Button';

export default function AppMenu(props) {

  return (
    <div className={props.className} id={props.id?props.id:""}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        className="app_menu_inner_button"
        onClick={props.onClick}
      >
        {props.label}
      </Button>
   
    </div>
  );
}
