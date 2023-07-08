import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';

export const AppRouter = () => (
    <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (

                <Route key={path} path={path} element={<div className='wrapper'>{element}</div>} />
            ))}
        </Routes>
    </Suspense>
);
