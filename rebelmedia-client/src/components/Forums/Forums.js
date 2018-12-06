import React, { Component } from 'react';
import '../CardComponent/card.css';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
