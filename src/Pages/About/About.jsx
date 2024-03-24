// About.jsx
import React from 'react';
import Banner from '../../Components/Banner/Banner'; 
import Collapse from '../../Components/Collapse/Collapse';
import './about.module.scss';

const About = () => {
  return (
    <div>
      <Banner imageUrl="./imageAboutPage.png" />
      <div className='Collapse-Container'>
        {items.map((item) => (
          <Collapse key={item.id} data={item} size="large"/>
        ))}
      </div>
    </div>
  );
};

export default About;
