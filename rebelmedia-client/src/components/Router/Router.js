import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Homepage/HomePage';
import Welcome from '../Welcome/Welcome';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import Users from '../Users/Users';

const Router = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        {/*<Route exact path="/register" component={Register} />*/}
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/users" component={Users} />
        <Route path='*' component={PageNotFound} />
    </Switch>
)

export default Router;