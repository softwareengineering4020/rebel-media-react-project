import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/login';
import Button from '@material-ui/core/Button';
import './login.css';
import Paper from '@material-ui/core/Paper';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            return (<Redirect to={'/'} />);
        }

        return (
         <div>
            <br/>
            <br/>
            <br/>
            <div class="container">
                <div>
                    <Paper className='header-card' elevation={1} square>
                    </Paper>
                </div>
                <br/>
                <br/>
                    <div className="card-content">
                        <div className="card-login-header">
                            Login
                        </div>
                        <div className="card-textboxes">
                            <div className="card-textboxes-username">
                                <label> Username : </label>
                                <input type="text" name="username" onChange={this.onUpdateUser} />
                            </div>
                            <div className='card-textboxes-password'>
                                <label> Password : </label>
                                <input type="password" name="password" onChange={this.onPasswordChange} />
                            </div>
                        </div>
                        <div className="card-buttons">
                          <Button size="large">Register</Button>
                            <Button size="large" onClick={this.setRedirect} disabled={!userFound}>Sign In</Button>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                <br/>
                <br/>
          </div>
        </div>
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