import React from "react";
import './button.module.scss'; 

const Button = ({ text, onClick }) => {
    return (
      <button className="button" onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default Button;