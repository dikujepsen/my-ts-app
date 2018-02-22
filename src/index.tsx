import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-snapshot';
import {AuthorPage} from "./component/Author";

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
