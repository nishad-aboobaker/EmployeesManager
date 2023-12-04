import React from "react";
import "./Details.css";
import photo from "./photo.jpg";

function Details() {
  return (
    <div>
      <div className="main-container">
        <div className="sub-container">
          <div className="sub-container-left">
            <img className="sub-container-left-photo" src={photo} alt="" />
          </div>
          <div className="sub-container-right">
            <div className="name">
              <span>NISHAD PP</span>
            </div>
            <div className="designation">
              <span>MANAGER</span>
            </div>
            <div className="others">
              <div className="other-details"></div>
              <div className="other-details"></div>
              <div className="other-details"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
