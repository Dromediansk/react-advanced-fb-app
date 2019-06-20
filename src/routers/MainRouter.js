import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginRouter from './LoginRouter';
import DashboardRouter from './DashboardRouter';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route path="/login" component={LoginRouter} />
                <Route path="/dashboard" component={DashboardRouter} />
                <Route render={() => <div>404 Not found</div>} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter;
