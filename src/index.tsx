import './index.css';

import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-snapshot';

import App from './App';
import { AuthorPage } from './component/Author';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

// import * as ReactDOM from 'react-dom';
render(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={App} />
            <Route path="/author" component={AuthorPage} />
            <Route path="/test" render={() => <h1>This is a test123</h1>} />
            <Route render={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root') as HTMLElement
);
registerServiceWorker();
