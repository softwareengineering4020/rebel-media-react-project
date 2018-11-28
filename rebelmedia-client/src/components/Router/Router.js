import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Homepage/HomePage';
import Welcome from '../Welcome/Welcome';
import Login from '../Login/Login';
import Rankings from '../Rankings/Rankings';
import PageNotFound from '../PageNotFound/PageNotFound';
import Forums from '../Forums/Forums';
import Movies from '../Movies/Movies';
import Users from '../Users/Users';
import Featured from '../Featured/Featured';


const Router = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        {/*<Route exact path="/register" component={Register} />*/}
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/rankings" component={Rankings}/>
        <Route exact path="/forums" component={Forums}/>
        <Route exact path="/featured" component={Featured}/>
        <Route path='*' component={PageNotFound} />
    </Switch>
)

export default Router;