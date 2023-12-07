import React from 'react';
import Banner from '../Components/Banner/Banner'; 
import { Logements } from './../Utils/api';

const Apartment = () => {
  const logements = Logements(); 
  if (logements.length === 0) {
    
    return <div>Aucun logement disponible pour le moment.</div>;
  }
  const { title, location, tags, host, rating, description, equipments } = logements[0]; 

  return (
    <div>
      <Banner
        imageUrl="./Images/imageHomeBannner.png"
      /> 
    
      <div className="title">{title}</div>
      <div className="location">{location}</div>
      <p className="tag">{tags.join(', ')}</p>

      <div>
        <p className="host">{host.name}</p>
        <p className="name">{host.name}</p>
        <img className="picture" src={host.picture} alt={host.name} />
        <p className="rating">{`Rating: ${rating}`}</p>
      </div>

      <div>
        <p className="description">{description}</p>
        <p className="equipments">{equipments.join(', ')}</p>
      </div>
    </div>
  );
};

export default Apartment;
