// Collapse.jsx
import React, { useState } from 'react';
import './collapse.module.scss';
import arrowImage from '../../Assets/Arrows/Arrow-back.svg';


const Collapse = ({ data, size}) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
    console.log("Active state:", !active);
  };

  return (
    <div className={`collapse-container ${size} ${active && "active"}`}>

        <div className="collapse-title">
          <span>{data.title}</span> 
          <img className='collapse-icon' src={arrowImage} alt="Arrow" onClick={handleToggle} /> 
        </div>

        <div className="collapse-content">
          {data.content}
        </div>
        
    </div>
  );
};

export default Collapse;
