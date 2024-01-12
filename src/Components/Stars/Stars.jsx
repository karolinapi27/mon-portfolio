  import React from 'react';
  import './stars.module.scss';

  const Stars = ({ rating }) => {
    
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'filled' : 'empty'}>
        &#9733;
      </span>
    ));

    return <div className="stars">{stars}</div>;
  };

  export default Stars;
