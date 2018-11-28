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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TableRow } from '@material-ui/core';

class Forums extends Component {
    render() {
        return(
            <div>
            <h1>DISCUSSION</h1>
         
          <Paper className="footer-paper" square>
              <Typography className="footer-paper-text" component="p" color="inherit">
                  <p>Please no foul language. Be respectful.</p>
                  <p>Copyright 2018. Rebel Media Entertainment Group. Software Engineering Project.</p>
              </Typography>
          </Paper>
      </div>
        )
    }
}

export default Forums
