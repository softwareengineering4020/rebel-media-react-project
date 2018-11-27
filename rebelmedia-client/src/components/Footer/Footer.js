import React, { Component } from 'react';
import Paper from '@material-ui/core/Typography';
import Typography from '@material-ui/core/Typography';
import '../Footer/footer.css';

class Footer extends Component {
    render() {
        return(
            <div>
                <Paper className="footer-paper" square>
                    <Typography className="footer-paper-text" component="p" color="inherit">
                        <p>This is a footer.</p>
                        <p>Copyright 2018. Rebel Media Entertainment Group. Software Engineering Project.</p>
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default Footer;