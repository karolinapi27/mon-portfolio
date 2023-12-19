import React from 'react';
import './stars.module.scss';

const Stars = ({ rating }) => {
  const roundedRating = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < roundedRating ? 'filled' : 'empty'}>
      &#9733;
    </span>
  ));

  return <div className="stars">{stars}</div>;
};

export default Stars;
