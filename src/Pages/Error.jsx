import React from 'react';
import styles from '../Components/ErrorPage/errorpage.module.scss';

const ErrorPage = () => {
    return (
        <div className={styles['error-container']}>
            <h1>404</h1>
            <p className={styles['page-error-text']}>Oups! La page que vous demandez n'existe pas.</p>
            <p className={styles['page-error-text-redirection']}>Retourner sur la page d’accueil</p>
        </div>
    );
};

export default ErrorPage;