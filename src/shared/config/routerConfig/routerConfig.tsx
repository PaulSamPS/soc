import { RouteProps } from 'react-router-dom';
import MainPage from '@/pages/MainPage/ui/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFound } from '@/pages/NotFoundPage/ui/NotFound';
import { ProfilePage } from '@/pages/ProfilePage';
import { RegistrationSuccess } from '@/pages/RegistrationSuccessPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    REGISTRATION_SUCCESS = 'registrationSuccess',

    NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.REGISTRATION_SUCCESS]: '/registration-success',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RouterPath.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.REGISTRATION_SUCCESS]: {
        path: RouterPath.registrationSuccess,
        element: <RegistrationSuccess />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFound />,
    },
};
