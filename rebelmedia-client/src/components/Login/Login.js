import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateUser} from '../../actions/login';
import HomePage from '../Homepage/HomePage';
import '../CardComponent/card.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state ={
            users: null,
            user: '',
            password: '',
            redirectToReferrer: false,
            isLoading: null
        }
        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    componentDidMount() {
        this.fetchUsers();
    }
    
    async fetchUsers() {
        if (!this.state.users) {
            try {
                this.setState({ isLoading: true });
                const response = await fetch(API_BASE_URL + '/users', {
                    mode: 'cors'
                });
                const data = await response.json();
                this.setState({ users: data, isLoading: false });
            } catch (err) {
                this.setState({ isLoading: false });
                console.log(err);
            }
        }
    }
    
    setRedirect = () => {
        this.setState({ redirectToReferrer: true });
    }

    onUpdateUser(e) {
       this.props.onUpdateUser(e.target.value);
       this.setState({ user: e.target.value });
    }

    onPasswordChange = e => {
        this.setState({ password: e.target.value })
    }

    render() {
        const { users, user, password } = this.state;
        let userFound = false;

        users && users.map(u =>
            u.name === user && u.password === password
                ? userFound = true
                : console.log('Could not find')
        );

        if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
            <HomePage {...this.props} />
            return (<Redirect to={'/'} />);
        }

        console.log(this.props);
        return (
            <Card className="card-container">
                <CardActionArea>
                    <CardMedia></CardMedia>
                </CardActionArea>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>

                    </Typography>
                    <label>Username:</label>
                    <input type="text" name="username" onChange={this.onUpdateUser} />
                    <label>Password:</label>
                    <input type="password" name="password" onChange={this.onPasswordChange} />
                </CardContent>
                <CardActions>
                    <Link to='/register'>
                        <Button size="small">Register</Button>
                    </Link>
                    <Button size="small" onClick={this.setRedirect} disabled={!userFound}>Sign In</Button>
                </CardActions>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
        onUpdateUser: updateUser
    }, dispatch);
};

export default connect(mapStateToProps, mapActionsToProps)(Login);