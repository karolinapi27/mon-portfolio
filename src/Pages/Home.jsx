// Home.jsx
import React from 'react';
import Banner from '../Components/Banner/Banner'; 
import Cards from '../Components/Cards/Cards'; 
import AboutMe from '../Components/AboutMe/AboutMe';
import Compétences from '../Components/Compétences/Compétences'

const Home = () => {
  return (
    <div id="home">
      <Banner
        imageUrl="./Images/beachBanner.webp"
        name="Karolina Pietrzykowska"
        title="Développeuse Web"
      />
      <div id="about">
        <AboutMe/>
      </div>
      <div id="projets">
        <Cards/>
      </div>
      <div id="competences">
        <Compétences/>
      </div>
      <div id="contact">
       
      </div>
    </div>
  );
};

export default Home;