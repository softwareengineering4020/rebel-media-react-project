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


class Login extends Component {
    render() {
        const {image, text} = this.props;
        return(
           
            <Card className="card-container">
                <CardActionArea>
                    <CardMedia>
                    </CardMedia>
                </CardActionArea>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                    
                    </Typography>
                </CardContent>
                <CardActions>
<div className="card-container">
<form>
  <label>
    Username: 
    <input type="text" name="Name" />
  </label>
  <label>
     Password:  
    <input type="text" name="Pass" />
  </label>
</form>
</div>
<div><Button size="small">Register</Button></div>

<div className="noidea-flex">
<Button size="small">Sign In</Button>
</div>               
</CardActions>
                </Card>
                 
            
            );
    }
}



export default Login;