import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import clsx from 'clsx'
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={clsx('app', theme)}>
            <Navbar/>
            <div className='divider'/>
            <AppRouter/>
            <button className='btn' onClick={toggleTheme}>{theme}</button>
        </div>
    );
};

