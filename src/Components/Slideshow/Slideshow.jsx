// Carousel.jsx
import { useState } from "react";
import styles from './slideshow.module.scss';
import ArrowLeft from '../../Assets/Arrows/Arrow-left.png';
import ArrowRight from '../../Assets/Arrows/Arrow-right.png';


const Carousel = ({pictures}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  const showArrows = pictures.length > 1; 

  return (
    <div className={styles.carouselContainer}>
      <img className={styles.carouselImg} src={pictures[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
      {showArrows && (
        <>
          <img
            onClick={prevImage}
            className={`${styles.arrowLeft} ${styles.arrow}`}
            src={ArrowLeft}
            alt="Flèche gauche"
          />
          <p className={styles.slideNumber}>{currentImageIndex + 1}/{pictures.length}</p>
          <img
            onClick={nextImage}
            className={`${styles.arrowRight} ${styles.arrow}`}
            src={ArrowRight}
            alt="Flèche droite"
          />
        </>
      )}
    </div>
  );
};

export default Carousel;