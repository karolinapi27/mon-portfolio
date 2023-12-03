// Banner.jsx

import React from 'react';
import styles from './banner.module.scss';

const Banner = ({ imageUrl, text }) => {
  const bannerStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className={styles.bannerContainer} style={bannerStyle}>
      <p className={styles.bannerText}>{text}</p>
    </div>
  );
};

export default Banner;
