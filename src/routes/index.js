import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// 自定义组件/页面
import Home from '@/pages/home';
import Note from '@/pages/notes';
import Picture from '@/pages/pics';
import Message from '@/pages/message';
import Memo from '@/pages/memo';
import About from '@/pages/about';
import HTMLNote from '@/pages/html-note';
import CSSNote from '@/pages/css-note';
import ES6Note from '@/pages/es6-note';
import ReactNote from '@/pages/react-note';
import AllNote from '@/pages/all-note';

import AllPicture from '@/pages/pics/c-pages/all-picture';
import Nature from '@/pages/pics/c-pages/nature';
import Animal from '@/pages/pics/c-pages/animal';
import People from '@/pages/pics/c-pages/people';
import Headshot from '@/pages/pics/c-pages/headshot';

export default function RoutesMap() {
    const routes = useRoutes([
        { path: '', element: <Navigate to='/home' /> },
        { path: '/home', element: <Home /> },
        {
            path: '/note', element: <Note />,
            children: [
                { path: '', element: <AllNote /> },
                { path: 'html', element: <HTMLNote /> },
                { path: 'css', element: <CSSNote /> },
                { path: 'es6', element: <ES6Note /> },
                { path: 'react', element: <ReactNote /> }
            ]
        },
        {
            path: '/pic', element: <Picture />,
            children: [
                {path: '', element: <AllPicture />},
                { path: 'nature', element: <Nature /> },
                { path: 'animal', element: <Animal /> },
                { path: 'people', element: <People /> },
                { path: 'headshot', element: <Headshot /> },
            ]

        },
        { path: '/msg', element: <Message /> },
        { path: '/memo', element: <Memo /> },
        { path: '/about', element: <About /> }
    ]);
    return routes;
}
