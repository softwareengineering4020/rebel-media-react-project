import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import 'whatwg-fetch';
import './index.css'

class SingleMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId: props.match.params.id,
            movieTitle: '',
            movieDescription: '',
            user: this.props.user,
            isFetching: false,
            submitted: false,
            redirectToReferrer: false
        }
    }

    componentDidMount() {
        const { movieId } = this.state;
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9deb5dea0278246a295fd24b00780716`)
            .then(response => response.json())
            .then(json => this.setState({ movie: json }))
    }

    submitMovie = (movie) => {
        const { submitted } = this.state;
        this.setState({
            submitted: true,
            movieTitle: movie.original_title,
            movieDescription: movie.overview
        });
        if (submitted) {
            this.postMovie(movie);
        }
    }

    postMovie = () => {
        if (this.props.user !== null) {
            const userData = {
                userName: this.props.user,
                movieTitle: this.state.movieTitle,
                movieDescription: this.state.movieDescription
            }
            fetch(API_BASE_URL + '/addMovie', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => console.log('Add Movie Success'))
                .then(this.setState({ redirectToReferrer: true }))
        } else {
            console.log("You are not in the right context")
        }
    }

    render() {
        const { movie } = this.state;
        const genres = movie && movie.genres.map(genres => genres.name)

        return (
            <div className='movie-container'>
                <h1>{movie && movie.title}</h1>
                <div className='movie-genre'><p>Genre: {(movie && genres.map(genre => genre).join(', ')) || 'None'}</p></div>
                <div>
                    <img className="show-image" src={movie && `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie && movie.title} />
                </div>
                <div>
                    <strong>Released:</strong> {movie && movie.release_date}
                </div>
                <div>
                    <p><strong>Summary: </strong>{movie && movie.overview}</p>
                </div>
                <div><Link to={'/movies'}>Back</Link></div>
                <div><button onClick={() => this.submitMovie(movie)}>Add Movie To Collection</button></div>
                {this.state.redirectToReferrer && <Redirect to='/movies' />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(SingleMovie);
