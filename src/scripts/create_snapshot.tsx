
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';

import { AuthorPage } from '../component/Author';

console.log("FRIST");

const renderedComponent = ReactDOMServer.renderToString(<AuthorPage />);
const helmet = Helmet.renderStatic();

console.log("HERE");

console.log(renderedComponent);


