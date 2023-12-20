// Home.jsx
import React from 'react';
import Banner from '../Components/Banner/Banner'; 
import Cards from '../Components/Cards/Cards'; 

const Home = () => {
  return (
    <div>
      <Banner
        imageUrl="./Images/imageHomeBanner.png"
        text="Chez vous, partout et ailleurs"
      />
      <Cards/>
    </div>
  );
};

export default Home;