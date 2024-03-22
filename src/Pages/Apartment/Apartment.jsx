import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projets from '../../Data/projets.json';
import Styles from './apartment.module.scss';
import Carousel from '../../Components/Slideshow/Slideshow';
import Collapse from '../../Components/Collapse/Collapse';
import '../../Components/Collapse/collapse.module.scss';
import Stars from '../../Components/Stars/Stars';


const Apartment = () => {

  const {id} = useParams()
  const data = projets

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
      {/* Affiche le composant Carousel */}
      <Carousel pictures={pictures}/>
      <div>
        {/* Conteneur principal avec les informations sur l'appartement */}
        <div className={Styles.container}>
          <div>
            {/* Titre, emplacement et tags de l'appartement */}
            <h1 className={Styles.title}>{title}</h1>
            <h2 className={Styles.location}>{location}</h2>
            <div className={Styles.tagsPosition}>
              {/* Affiche les tags de l'appartement */}
              {tags.map(tag => (
                <span className={Styles.tags} key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <div className={Styles.hostContainer}>
            {/* Détails sur l'hôte */}
            <div className={Styles.hostDetails}>
              <div className={Styles.hostName}>
                {/* Affiche le nom de l'hôte en deux parties */}
                {nameParts[0] && <span>{nameParts[0]}</span>}
                {nameParts[1] && <span>{nameParts[1]}</span>}
              </div>
              {/* Affiche la photo de l'hôte */}
              <img className={Styles.picture} src={host.picture} alt={host.name}/>
            </div>
            {/* Affiche la note de l'appartement avec des étoiles */}
            <Stars rating={rating} />
          </div>
        </div>
        {/* Affiche deux composants Collapse pour la description et les équipements de l'appartement */}
        <div className={Styles.CollapsePositionFlex}>
          <div className={Styles.CollapseWidth}>
            <Collapse data={{title: "Description", content: description}} size="small"/>
          </div>
          <div className={Styles.CollapseWidth}>
            <Collapse
              data={{
                title: "Équipements",
                content: equipments.map((equipment) => <span key={equipment}>{equipment}</span>),
              }}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apartment
