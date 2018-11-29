import React, { Component } from 'react';
import { API_BASE_URL } from '../../config';
import { Redirect } from 'react-router-dom';

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
        this.setState({ [e.target.name] : e.target.value });
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
        const {password, email, name} = this.state;
        return(
            <div>
                <h1>Registration Form</h1>
                    <div>
                        <label>Enter an email:</label>
                        <input type="text" name="email" required="required" value={email} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Enter a username:</label>
                        <input type="text" name="name" required="required" value={name} onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Enter a password:</label>
                        <input type="password" name="password" required="required" value={password} onChange={this.onChange} />
                    </div>
                    <button size="medium" onClick={this.handleSubmit}>Submit</button>
                    <button size="medium" onClick={this.handleClear}>Clear</button>
                    { this.state.redirectToReferrer && <Redirect to='/' /> }
          </div>
        )
    }
}

export default Register
