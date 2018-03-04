import { Switch, Route } from "react-router";
import { ReactApp } from "../App";
import { AuthorPage } from "../Author";
import * as React from 'react';
import { CourseApp } from "component/App";

const RouterSwitch = () => (
    <Switch>
        <Route path="/CourseApp" component={CourseApp} />
        <Route exact={true} path="/" component={ReactApp} />        
        <Route path="/test" render={() => <h1>This is a test123</h1>} />
        <Route render={() => <h1>Page not found</h1>} />
    </Switch>
);


export { RouterSwitch };