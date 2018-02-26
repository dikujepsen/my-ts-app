import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-snapshot';

import { RouterSwitch } from './component/RouterSwitch';
import registerServiceWorker from './registerServiceWorker';



render(
    <BrowserRouter>
        <RouterSwitch />
    </BrowserRouter>
    , document.getElementById('root') as HTMLElement
);
registerServiceWorker();
