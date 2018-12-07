import React, { Component } from 'react';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';
import MovieList from '../../components/MovieList';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            movieText: '',
            isFetching: false,
            user: this.props.user
        }
    }

    handleInputChange = e => {
        this.setState({ movieText: e.target.value, isFetching: true })
        fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=9deb5dea0278246a295fd24b00780716&query=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ movies: json, isFetching: false }))
            .catch(function () {
                console.log("error");
            })
    }

    renderMovieList = (movies, isFetching) => {
        if (!isFetching)
            return (
                <li>{movies.results.title}</li>
            );
    }

    render() {
        const { movieText, movies, isFetching, user } = this.state;
        console.log('user', user);
        return (
            <div>
                <br/>
                <br/>
                <br/>
                 <div class="container">
                    <div>
                        <Paper className='header-card' elevation={1} square>
                        <div className='header-card-text'>

                        </div>
                        </Paper>
                    </div>
                </div>
                <br/>
                <br/>
               <h3><center> Find all your Favorite Movies and more... </center>
               </h3>
               <h3> <center> Search: <input value={movieText} type="text" onChange={movies && this.handleInputChange} /></center>
                </h3>
                {
                    isFetching
                    &&
                    <Loader />
                }
                {
                    !isFetching
                    &&
                    <MovieList list={movies.results} />
                }
                {
                    !isFetching && movies.length === 0 && movieText.trim() !== ''
                    &&
                    <p><h3><center>I'm sorry, there are no results for that Movie.</center></h3></p>
                }
                {
                    !isFetching && movieText.trim() === '' && movies.length === 0
                    &&
                    <p><h6><center>Please enter a Movie Title</center></h6></p>
                }

            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
  });

export default connect(mapStateToProps)(Movies);