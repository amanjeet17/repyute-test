import React, { Component } from 'react';
import axios from 'axios';
import Spinner from './spinner';
import Moviestable from './movieTable';
import MovieSearchHistory from './movieSearchHistory';
import MovieSearch from './movieSearch';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movies: [],
            filter: [],
            history: [],
            languages: []
        }
    }

    componentDidMount() {
        let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1"
        axios.get(url)
            .then((res) => {
                let movies = res.data.results
                let language = {};

                movies.forEach(element => {
                    if (!language[element.original_language]) {
                        language[element.original_language] = element.original_language
                    }
                });
                this.setState({ movies, filter: movies, languages: Object.values(language), history: [], loading: false })
            })
            .catch((err) => console.log("err", err))
    }

    filterSearch = (filter) => {
        let filterArr = Object.entries(filter)
        let arr = this.state.movies.slice()
        let history = this.state.history.slice()
        let filteredSearch = arr.filter(function (item) {
            if (filterArr.length > 1) {
                if (item["original_title"].toLowerCase().indexOf(filter["original_title"].toLowerCase()) > -1 && item["original_language"] ===filter["original_language"]) {
                    return true;
                }
                return false
            }
            else {
                for (var key in filter) {
                    if (item[key].toLowerCase().indexOf(filter[key].toLowerCase()) > -1 && key === "original_title") {
                        return true;
                    }
                    else if (item[key] === filter[key]) { return true }
                }
                return false;
            }
        });

        let filterApplied = "";
        Object.values(filter).forEach((el, i) => {
            if (i > 0) {
                filterApplied = filterApplied + " && " + el
            }
            else {
                filterApplied = filterApplied + el
            }
        })
        history.unshift({ filter: filterApplied })
        history.splice(3)
        this.setState({ filter: filteredSearch, history: history })
    }

    deleteMovieHistory = (value) => {
        let history = this.state.history.filter((el, index) => index !== value)
        this.setState({ history })
    }

    deleteAllHistory = () => {
        this.setState({ history: [] })
    }

    reset = () => {
        this.setState((prevState) => {
            return { filter: prevState.movies }
        })
    }

    render() {
        const { history, filter, languages, loading } = this.state
        let content;
        if (loading) {
            content = <Spinner />
        }
        else {
            content = (
                <div>
                    <h1>Movie list</h1>
                    <button onClick={this.reset}> Show All</button>
                    <Moviestable movies={filter} />
                    <hr />
                    <MovieSearchHistory
                        history={history}
                        deleteMovieHistory={this.deleteMovieHistory}
                        deleteAllHistory={this.deleteAllHistory}
                    />
                    <hr />
                    <MovieSearch languages={languages} filterSearch={this.filterSearch} />
                </div>
            )
        }
        return (
            <div>

                {content}
            </div>
        )
    }
}
export default Container;