import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logements from '../../Data/logements.json';
import Styles from './apartment.module.scss';
import Carousel from '../../Components/Slideshow/Slideshow';
import Collapse from '../../Components/Collapse/Collapse';
import '../../Components/Collapse/collapse.module.scss';
import Stars from '../../Components/Stars/Stars';


const Apartment = () => {

  const {id} = useParams()
  const data = Logements

  const apartment = data.find(item => item.id === id)

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!apartment) {
      navigate('./ErrorPage');
    }
  }, [apartment, navigate]);

 
  if (!apartment) {
    return null; 
  }

  const {title, pictures, location, tags, host, rating, description, equipments} = apartment

  const nameParts = host.name.split(' ')

  return (
    <div className={Styles.containerMargin}>
      <Carousel pictures={pictures}/>
      <div>
        <div className={Styles.container}>
          <div>
            <h1 className={Styles.title}>{title}</h1>
            <h2 className={Styles.location}>{location}</h2>

            <div>
              {tags.map(tag => (
                <span className={Styles.tags} key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className={Styles.hostContainer}>
            <div className={Styles.hostDetails}>
              <div className={Styles.hostName}>
                {nameParts[0] && <span>{nameParts[0]}</span>}
                {nameParts[1] && <span>{nameParts[1]}</span>}
              </div>
              <img className={Styles.picture} src={host.picture} alt={host.name}/>
            </div>
            <Stars rating={parseInt(rating)}/>
          </div>
        </div>
        <div className={Styles.CollapsePositionFlex}>
          <div className={Styles.CollapseWidth}>
          <Collapse data={{title: "Description", content: description}} size="small"/></div>
          <div className={Styles.CollapseWidth}>
          <Collapse
            data={{
              title: "Équipements",
              content: equipments.map((equipment) => <span key={equipment}>{equipment}</span>),
            }}
            size="small"
          /></div>
        </div>
      </div>
    </div>
  )
}

export default Apartment
