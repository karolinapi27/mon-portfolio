// Banner.jsx

import React from 'react';
import styles from './banner.module.scss';

const Banner = ({ imageUrl, name, title, customStyle }) => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${imageUrl})`,
    ...customStyle 
  };


  return (
    <div className={styles.bannerContainer} style={bannerStyle}>
      <p className={styles.bannerName}>{name}</p>
      <p className={styles.bannerTitle}>{title}</p>
    </div>
  );
};

export default Banner;
