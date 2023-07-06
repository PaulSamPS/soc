import React from 'react';
import './styles/index.scss';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import clsx from 'clsx'
import {AppRouter} from "app/providers/router";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={clsx('app', theme)}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <AppRouter/>
        </div>
    );
};

