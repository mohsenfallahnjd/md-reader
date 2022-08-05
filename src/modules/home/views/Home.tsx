import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/images/react.svg';
import '../scss/home.scss';

/**
 * Home jsx
 */
export const Home: React.FC = () => {
    const { t } = useTranslation(['general']);

    return (
        <div className="App">
            <Helmet>
                <title>Home</title>
                <link rel="canonical" href={ window.location.href } />
            </Helmet>

            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
                <h3>Welcome to React!</h3>

                <p>{ t('powered_by') }</p>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    
    );
};
