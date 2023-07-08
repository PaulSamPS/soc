import React from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import clsx from 'clsx'
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={clsx('app', theme)}>
            <Navbar/>
            <div className='divider'/>
            <AppRouter/>
        </div>
    );
};

