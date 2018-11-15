import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Homepage/HomePage';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

const Router = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path='*' component={PageNotFound} />
    </Switch>
)

export default Router;