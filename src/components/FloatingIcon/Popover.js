// Popover.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Popover.css";
import OptionsMenu from "../OptionsMenu/OptionsMenu";

const Popover = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const closeOptionsMenu = () =>{
    navigate(-1);
  }
  const openOptionsMenu = () => {
    navigate("/options"); // Navigate to the options menu
  };

  return (
    <div className="popover">
      {/* Your popover content */}
      <button
        className="take-screenshot-button"
        style={{ backgroundColor: "#3498db", width: "150px" }}
        onClick={openOptionsMenu} 
      >
        Take a screenshot
      </button>
    </div>
  );
};

export default Popover;





