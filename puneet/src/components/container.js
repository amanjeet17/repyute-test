import React, { Component } from 'react';
import axios from 'axios';
import Moviestable from './movieTable';
import MovieSearchHistory from './movieSearchHistory';
import MovieSearch from './movieSearch';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            filter:[],
            history:[],
            languages:[]
        }
    }

    componentDidMount() {
        let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1"
        axios.get(url)
            .then((res) => {
                let movies = res.data.results
                let language = {};

                this.setState({ movies  ,history:movies.slice(0,3)})
            })
            .catch((err) => console.log("err", err))
    }

    filterSearch =(movie) =>{
        console.log("filterSearch",movie)
        const { name ,language } = movie;
        let arr = this.state.movies.slice()
        let filteredSearch = arr.filter((movie)=>{
            let _movie = movie.original_title.toLowerCase()
            let _name = name.toLowerCase()
            if(_movie.indexOf(_name)>-1){
                return _movie
            }
        });
        this.setState({movies:filteredSearch})
    }

    render() {
        const { movies,history,filter } = this.state
        const testinglanguage= ["english","japenes","hindi"] ;
        console.log(this.state)
        return (
            <React.Fragment>
                <h1>Movie list</h1>
                <Moviestable movies={movies} />
                <hr/>
                <MovieSearchHistory history={history} />
                <hr/>
                <MovieSearch languages={testinglanguage} filterSearch={this.filterSearch}/>
            </React.Fragment>
        )
    }
}
export default Container;