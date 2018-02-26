
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';

import { AuthorPage } from '../component/Author';
import { RouterSwitch } from '../component/RouterSwitch';
// import { match } from 'react-router';
import { matchPath } from 'react-router-dom';
// import { App } from '../component/App';
import { App } from 'component/App';
console.log("FRIST");

const context = {};

// const renderedComponent = ReactDOMServer.renderToString(
// <StaticRouter
//     location={"/author"}
//     context={context}   
// >
//     <RouterSwitch />
// </StaticRouter>
// );

const routes = [
    {
        path: '/author',
        component: AuthorPage
    },
    {
        path: '/',
        component: App
    }
];

routes.some(item => {
    // use `matchPath` here
    const match = matchPath("/", item);
    console.log(match);
    if (match) {
        const Component  = item.component;
        const renderedRouteComponent = ReactDOMServer.renderToString(<Component />);
        console.log(renderedRouteComponent);
    }
    return match != null;
});


const renderedComponent = ReactDOMServer.renderToString(
    <AuthorPage />
);

const helmet = Helmet.renderStatic();

console.log("HERE");

// console.log(renderedComponent);


