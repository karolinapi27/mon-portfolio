// Banner.jsx

import React from 'react';
import styles from './banner.module.scss';

const Banner = ({ imageUrl, name, title, customStyle }) => {
  const bannerStyle = {
    backgroundImage: `url(${imageUrl})`,
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
