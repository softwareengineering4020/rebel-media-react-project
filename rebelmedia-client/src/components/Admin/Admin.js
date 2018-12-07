import React, { Component } from 'react';
import { API_BASE_URL } from '../../config';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';

import './admin.css';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: null,
            user: this.props.user,
            admin: false,
            isLoading: false,
            userId: null
        }
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
    /*
        handleDelete() {
            handleSubmit = () => {
                const userData = {
                    userId: this.state.userId,
                    email: this.state.email,
                    name: this.state.name,
                }
    
                fetch(API_BASE_URL + '/deleteUser', {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify(userData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => console.log('Registration success'))
                    .then(this.setState({ redirectToReferrer: true }))
            }
        }
    */
    render() {
        const { users, user, isLoading } = this.state;

        let userFound = false;

        console.log(users);
        users && users.map(u =>
            u.name === user && u.isAdmin === 1
                ? userFound = true
                : console.log('Could not find')
        );

        return (
            <div>
                <div className="admin-container" disabled={!userFound}>
                    <div className="admin-header"><h1>Hello {this.state.user && this.state.user}</h1></div>
                    <div className="list-of-users">
                        {isLoading && userFound && <h1>Loading users...</h1>}
                        {users && userFound &&
                            <div>
                                <div>Here you can delete users: </div>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Delete User</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(
                                            user =>
                                                <tr id={user.user_id} key={user.user_id}>
                                                    <td>{user.user_id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.password}</td>
                                                    <td><Button>Delete User</Button></td>
                                                </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(Admin);