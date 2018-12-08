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
      <div class="container">
      <br />
      <br />
      <br />
        <div>
        <Paper className='header-card' elevation={1} square>
          <div className='header-card-text'>
          </div>
        </Paper>
        </div>
          <div>
          <h1 style={{textAlign:'center'}}>Welcome to Rebel Media{username ? ', ' + username : ''}</h1>
          <h3><center>Your Personal Entertainment Hub</center></h3>
          <h5><center>Find All the Latest Top Hit Movies and TV Shows</center></h5>
          <br />
          <div class="container">
            <div>
              <div className="banner-middle">
              </div>
            </div>
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
