import React, {Suspense} from 'react';
import './styles/index.scss';
import {Routes, Route, Link} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {useTheme} from "./theme/useTheme";
import clsx from 'clsx'

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={clsx('app', theme)}>
            <button onClick={toggleTheme}>{theme}</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

