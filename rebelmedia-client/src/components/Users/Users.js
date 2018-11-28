import React, { Component } from 'react';
import { API_BASE_URL } from '../../config';
import { Table } from 'semantic-ui-react';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: null,
            isLoading: null
        }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    async fetchUsers() {
        if (!this.state.users) {
            try {
                this.setState({isLoading: true});
                const response = await fetch(API_BASE_URL + '/users', {
                    mode: 'cors'
                });
                const data = await response.json();
                this.setState({ users: data, isLoading: false});
            } catch(err) {
                this.setState({isLoading: false});
                console.log(err);
            }
        }
    }

    render() {
        const { users, isLoading } = this.state;
        return(
            <div>
                <h1 className="header">List of Users</h1>
                    {isLoading && <h1>Loading users...</h1>}
                    {users && 
                        <div>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
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
                                            </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    }
            </div>
        );
    }
}

export default Users;