// Carousel.jsx
import { useState } from "react";
import styles from './slideshow.module.scss'


const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const showArrows = images.length > 1; 

  return (
    <div className={styles.carouselContainer}>
      {showArrows && (
        <>
          <img
            onClick={prevImage}
            className={styles.arrow}
            src="./Assets/Arrows/Arrow-left.png"
            alt="Flèche gauche"
          />
          <p className={styles.slideNumber}>{currentImageIndex + 1}/{images.length}</p>
          <img
            onClick={nextImage}
            className={styles.arrow}
            src="./Assets/Arrows/Arrow-right.png"
            alt="Flèche droite"
          />
        </>
      )}
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
    </div>
  );
};

export default Carousel;