import React, { Component } from 'react';

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            records: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/users/read.php')
        .then(response => response.json())
        .then(data => this.setState({ records: data}));
    }

    render() {
        const { records } = this.state;
        console.log("records", records);
        return (
            <div className="list-of-users">
            <h1 className="header">List of Users</h1>
                <div className="users">
                {records.records && 
                    <ul>
                        {records.records.map(record => 
                        <li key={record.id}>
                            {record.name} - {record.email}
                        </li>
                        )}
                    </ul>
                }
                </div>
            </div>
        );
    }
}

export default Users;