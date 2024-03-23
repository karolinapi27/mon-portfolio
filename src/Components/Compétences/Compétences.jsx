import React from "react";
import competence from "../../Data/competences.json";
import styles from "./compétences.module.scss";

const Competences = () => {
  return (
    <div>
      <h2 className={styles.CompetencesTitle}>Mes Compétences</h2>
      <div className={styles.CompetencesContainer}>
        {competence.map((competence) => (
          <div key={competence.nom}>
            <img src={process.env.PUBLIC_URL + competence.logo} alt={competence.nom} className={styles.logo} />
            <p className={styles.logoName}>{competence.nom}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;