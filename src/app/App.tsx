import React, {Suspense} from 'react';
import './styles/index.scss';
import {Routes, Route, Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import clsx from 'clsx'
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={clsx('app', theme)}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

