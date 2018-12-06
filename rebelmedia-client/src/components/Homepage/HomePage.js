/* Component imports */
import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import CardComponent from '../CardComponent/CardComponent';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

/* Material-UI imports */
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


/* CSS imports */
import './homepage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.user
    }
  }

  render() {
    const { username } = this.state;
    return (
      <div>
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
          <div>
          <h1 style={{textAlign:'center'}}>Welcome to Rebel Media{username ? ', ' + username : ''}</h1>
          <p>This is the body of the website</p>
          <div className="cards-container-flex">
          <Link to= '/featured'>
          <CardComponent text="Featured"/>
          </Link>
          <Link to= '/rankings'> 
          <CardComponent text="Rankings"/>
          </Link>
          <Link to= '/forums'>
          <CardComponent text="Forum"/>
          </Link>
          </div>
        <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(HomePage);
