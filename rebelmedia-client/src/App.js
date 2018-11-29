import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Router from './components/Router/Router';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title="Rebel Media Entertainment" scroll>
                  <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/movies">Movies</Link>
                  </Navigation>
              </Header>
              <Drawer title="Rebel Media">
                  <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/movies">Movies</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Router />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
