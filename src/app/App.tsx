import React, { Suspense } from 'react';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

export const App = () => (
    <div className='app'>
        <Suspense fallback=''>
            <Navbar />
            <div className='divider' />
            <div className='content'>
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
);
