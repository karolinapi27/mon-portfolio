import React from 'react';
import { useParams } from 'react-router-dom';
import { Logements } from '../../Utils/api';
import Styles from './apartment.module.scss';
import Carousel from '../../Components/Slideshow/Slideshow'

const Apartment = () => {
  const data = Logements();
  const { id } = useParams();
  const apartment = data.find(item => item.id === id);

  console.log(data);

    if (!apartment) {
      return <p>Loading...</p>; 
    }
  
    const { title, location, tags, host, rating, description, equipments } = apartment;

    return (
      <div> 
        <Carousel></Carousel>

        <h1 className={Styles.title}>{title}</h1>
        <h2 className={Styles.location}>{location}</h2>
        <p className={Styles.tag}>{tags}</p>

        <div>
          <p className={Styles.host}>{host}</p>
          <p className={Styles.name}>{host}</p>
          <img className={Styles.picture} src={host} alt={host} />
          <p className={Styles.rating}>{`Rating: ${rating}`}</p>
        </div>

        <div>
          <p className={Styles.description}>{description}</p>
          <p className={Styles.equipments}>{equipments}</p>
        </div>
      </div>
    );
  } 


export default Apartment;
