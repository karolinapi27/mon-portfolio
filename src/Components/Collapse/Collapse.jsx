// Collapse.jsx
import React, { useState } from 'react';
import './collapse.module.scss';
import arrowImage from '../../Assets/Arrows/Arrow-back.svg';


const Collapse = ({ data, size}) => {
  const [active, setActive] = useState(false);

  const Toggle = () => {
    setActive(!active);
  };

  return (
    <div className={`collapse-container ${size} ${active && "active"}`}>

        <div className="collapse-title">
          <span>{data.title}</span> 
          <img className='collapse-icon' src={arrowImage} alt="Arrow" onClick={Toggle} /> 
        </div>

        <div className="collapse-content">
          {data.content}
        </div>    
    </div>
  );
};

export default Collapse;
