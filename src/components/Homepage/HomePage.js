/* Component imports */
import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import CardComponent from '../CardComponent/CardComponent';

/* Material-UI imports */
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


/* CSS imports */
import './homepage.css';

class HomePage extends Component {
  render() {
    return (
      <div>
          <Navigation />
          <div>
          <Paper className='header-card' elevation={1} square>
            <div className='header-card-text'>
              {/*This is text that will be represented on the header card*/}
              <Typography variant="h3" component="h3" color="inherit">
              Rebel Media Entertainment
              </Typography>
              {/*This is text that will be represented on the header card*/}
              <Typography variant="h5" component="h2" color="inherit">
                Find collections of movies, television shows, and games to rate!
              </Typography>
            </div>
          </Paper>
          </div>
          <h1 style={{textAlign:'center'}}>Welcome to Rebel Media</h1>
          <p>This is the body of the website</p>
          <div className="cards-container-flex">
          <CardComponent text="This is text1"/>
          <CardComponent text="This is text2"/>
          <CardComponent text="This is text3"/>
          </div>
          <Footer />
      </div>
    );
  }
}

export default HomePage;
