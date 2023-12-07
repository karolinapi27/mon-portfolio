import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../ErrorPage/errorpage.module.scss';

const ErrorPage = () => {
    return (
        <div className={styles['error-container']}>
            <h1>404</h1>
            <p className={styles['page-error-text']}>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className={styles['page-error-text-redirection']}>Retourner sur la page d’accueil</Link>
        </div>
    );
};

export default ErrorPage;