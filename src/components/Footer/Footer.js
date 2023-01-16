import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div class="footer flex-vt">
          <div class="socialmedia flex-hz">
              <i className="fa fa-facebook fa-3x" ></i>
              <i className="fa fa-twitter fa-3x"></i>
              <i className="fa fa-instagram fa-3x"></i>
          </div>
          <p className="footer-text">© 2022 DIVA TV GROUP</p>
        </div>
      </div>
    </>
  );
};

export { Footer };
