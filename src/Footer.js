import React from "react";
import logo from "./logo.png";

export default function Footer() {
  return (
    <div className="footer_sticker">
      <div className="footer_section_logo">
        <img src={logo} alt="Writer" className="logo" id="logo" />
      </div>
      <div className="footer_section">
        <div className="address">75 Laurier Ave. E.</div><br></br>
        <div className="address">Ottawa (Ontario)</div><br/>
        <div className="address">ON K1N 6N5</div><br/>
        <div className="address">Canada</div>
      </div>
      <div className="footer_section">
        <div className="address">1-888-323-3223</div><br></br>
        <div className="address">contactus@gmail.com</div>
      </div>
      <div className="copy_rights">Copyrights Novoprog 2020</div>
    </div>
  );
}
