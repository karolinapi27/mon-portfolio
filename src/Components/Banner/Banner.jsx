// Banner.jsx

import React from 'react';
import styles from './banner.module.scss';

const Banner = ({ imageUrl, text }) => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${imageUrl})`
  };

  return (
    <div className={styles.bannerContainer} style={bannerStyle}>
      <p className={styles.bannerText}>{text}</p>
    </div>
  );
};

export default Banner;
