import React, { Component } from 'react';
import { API_BASE_URL } from '../../config';
import { Table } from 'semantic-ui-react';

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: null,
            isLoading: null
        };
    }

    componentDidMount() {
        this.getMovies();
    }

    async getMovies() {
        if (!this.state.movies) {
            try {
                this.setState({isLoading: true});
                const response = await fetch(API_BASE_URL + '/movies', {
                    mode: 'cors'
                });
                const data = await response.json();
                this.setState({ movies: data, isLoading: false});
            } catch(err) {
                this.setState({isLoading: false});
                console.log(err);
            }
        }
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            <div className="list-of-movies">
            <h1 className="header">List of Movies</h1>
                    {isLoading && <h1>Loading movies...</h1>}
                    {movies && 
                        <div>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movies.map(
                                        movie =>
                                            <tr id={movie.movies_id} key={movie.movies_id}>
                                                <td>{movie.movies_id}</td>
                                                <td>{movie.title}</td>
                                                <td>Save movie button</td>
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

export default Movies;