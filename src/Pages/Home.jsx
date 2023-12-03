// Home.jsx
import React from 'react';
import Banner from '../Components/Banner/Banner'; 
import CardsDisplay from '../Components/Cards/CardsDisplay';

const Home = () => {
  return (
    <div>
      <Banner
        imageUrl="./Images/imageHomeBannner.png"
        text="Chez vous, partout et ailleurs"
      />
      <CardsDisplay />
    </div>
  );
};

export default Home;