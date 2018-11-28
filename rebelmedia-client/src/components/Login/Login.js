import React, { Component } from 'react';
import { PostData } from '../../services/PostData';
import { Redirect } from 'react-router-dom';

import '../CardComponent/card.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if (this.state.username && this.state.password) {
            PostData('login', this.state).then((result) => {
                console.log('test');
                let responseJson = result;
                console.log(responseJson);
                if (responseJson.userData) {
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    this.setState({redirectToReferrer: true});
                }
            });
        }
    }

    onChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
            return (<Redirect to={'/'} />);
        }

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
    <input type="text" name="username" onChange={this.onChange} />
  </label>
  <label>
     Password:  
    <input type="password" name="password" onChange={this.onChange} />
  </label>
</form>
</div>
<div><Button size="small">Register</Button></div>

<div className="noidea-flex">
<Button size="small" onClick={this.login}>Sign In</Button>
</div>               
</CardActions>
                </Card>
                 
            
            );
    }
}



export default Login;