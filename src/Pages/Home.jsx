// Home.jsx
import React from 'react';
import Banner from '../Components/Banner/Banner'; 
import Card from '../Components/Cards/Card'; 

const Home = () => {
  return (
    <div>
      <Banner
        imageUrl="./Images/imageHomeBannner.png"
        text="Chez vous, partout et ailleurs"
      />
      <Card/>
    </div>
  );
};

export default Home;