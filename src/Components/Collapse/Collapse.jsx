// Collapse.jsx
import React, { useState } from 'react';
import './collapse.module.scss';


const Collapse = ({ data }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className={`collapse-container ${active && "active"}`}>
      <div className="collapse-title" onClick={handleToggle}>
        <strong>{data.title}</strong>
        <span className='collapse-icon'>
        <img src='../../Assets/Arrows/Arrow-back.svg' alt='icone'/>
        </span>
      </div>
      <div className="collapse-content">
        {data.content}
      </div>
    </div>
  );
};

export default Collapse;
