import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routeConfig } from '@/shared/config/routerConfig/routerConfig';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { getAuthDataState } from '@/entities/User';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getAuthDataState);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route key={path} path={path} element={<div className='wrapper'>{element}</div>} />
                ))}
            </Routes>
        </Suspense>
    );
});
