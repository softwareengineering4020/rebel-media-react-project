import React, { Component } from 'react';
import '../CardComponent/card.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { TableRow } from '@material-ui/core';

class Register extends Component {
    render() {
        return(
            <div>
                <h1>Sign Up Today!</h1>
            <form>
            <label>
                <div>
              Enter a username: 
              <input type="text" name="Name" />
              </div>
            </label>
            <label>
                <div>
               Enter a password:  
              <input type="text" name="Pass" />
              </div>
            </label>
            <label>
            <div>
               Confirm password:  
              <input type="text" name="Pass" />
              </div>
            </label>
            <label>
                <div>
               Enter an email:  
              <input type="text" name="Pass" />
              </div>
            </label>
            <div>
            <button size = "medium"> Submit </button>
            </div>
          </form>
          </div>
        )
    }
}

export default Register
