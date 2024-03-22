// Home.jsx
import React from 'react';
import Banner from '../Components/Banner/Banner'; 
import Cards from '../Components/Cards/Cards'; 
import AboutMe from '../Components/AboutMe/AboutMe';
import Compétences from '../Components/Compétences/Compétences'

const Home = () => {
  return (
    <div>
      <Banner
        imageUrl="./Images/banner.png"
        name="Karolina Pietrzykowska"
        title="Développeuse Web"
      />
      <AboutMe/>
      <Cards/>
      <Compétences/>
    </div>
  );
};

export default Home;