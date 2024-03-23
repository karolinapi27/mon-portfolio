import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projets from '../../Data/projets.json';
import Styles from './projets.details.module.scss';
import Button from '../../Components/Button/Button';

const Projet = () => {
  const { id } = useParams();
  const projet = projets.find(item => item.id === id);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!projet) {
      navigate('/ErrorPage'); 
    }
  }, [projet, navigate]);

  if (!projet) {
    return null;
  }

  const { title, description, technologies, cover, demoLink } = projet;

  const handleVisitSite = () => {
    window.open(demoLink, '_blank');
  };


  return (
    <div className={Styles.containerMargin}>

      <h1 className={Styles.title}>{title}</h1>
      
      <div>
        <img src={cover} alt={`Couverture du projet ${title}`} className={Styles.projectImage} />
      </div>

      <div className={Styles.tagsPosition}>
        {technologies.map(tag => (
          <span className={Styles.tags} key={tag}>{tag}</span>
        ))}
      </div>

      <div className={Styles.description}>
        <h4>Description du projet</h4>
        <p>{description}</p>
      </div>
     <div className={Styles.buttonPosition}>
      <Button text="Visitez la page" onClick={handleVisitSite} />
     </div>
     
    </div>
  );
};
export default Projet;
