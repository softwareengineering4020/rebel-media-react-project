import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1 style={{margin: 'auto', textAlign: 'center', paddingTop: '2em'}}>HTTP 404</h1> 
                <p style={{margin: 'auto', textAlign: 'center', paddingTop: '2em'}}>The page you are looking for is not here.</p>
                <p style={{margin: 'auto', textAlign: 'center', paddingTop: '2em'}}>Go <Link to='/'>back</Link> to the home page</p>
            </div>
        );
    }
}

export default PageNotFound;