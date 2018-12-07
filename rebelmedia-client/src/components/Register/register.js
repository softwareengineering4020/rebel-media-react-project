import React, { Component } from 'react';
import { API_BASE_URL } from '../../config';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './register.css';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            password: '',
            redirectToReferrer: false
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleClear = () => {
        this.setState({
            email: '',
            name: '',
            password: ''
        })
    }

    handleSubmit = () => {
        const userData = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }
        
        fetch(API_BASE_URL + '/register', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log('Registration success'))
            .then(this.setState({ redirectToReferrer: true }))
    }

    render() {
        const { password, email, name } = this.state;
        return (
            <div className='card-container'>
                <div className="card-content">
                    <div className="card-login-header">
                        Register
                </div>
                    <div className="card-textboxes">
                        <div className="card-textboxes-email">
                            <label>Email:</label>
                            <input type="text" name="email" required="required" value={email} onChange={this.onChange} />
                        </div>
                        <div className='card-textboxes-username'>
                            <label>Username:</label>
                            <input type="text" name="name" required="required" value={name} onChange={this.onChange} />
                        </div>
                        <div className='card-textboxes-password'>
                            <label>Password:</label>
                            <input type="password" name="password" required="required" value={password} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="card-buttons">
                        <Button size="medium" onClick={this.handleSubmit}>Register</Button>
                        <Button size="medium" onClick={this.handleClear}>Clear</Button>
                        {this.state.redirectToReferrer && <Redirect to='/' />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
