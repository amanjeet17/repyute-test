import React, { Component } from 'react'

class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            original_title: "",
            original_language: undefined,
            languages: [],
            filter: {}
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.languages !== prevState.languages) {
            return ({ languages: nextProps.languages })
        }
        else {
            return null
        }
    }

    searchMovie = () => {
        this.props.filterSearch(this.state.filter)
    }

    onChange = (e) => {
        let { filter }= JSON.parse(JSON.stringify(this.state));
        filter[e.target.name] = e.target.value;
        if (e.target.value === "All") {
            delete filter[e.target.name]
        }
        this.setState({ [e.target.name]: e.target.value, filter })
    }

    render() {
        const { original_title, original_language, languages } = this.state
        return (
            <div className="movie-search">
                <div className="col-3">
                    <div className="input-group">
                        <div>
                            <span className="input-left-text">Title</span>
                        </div>
                        <input type="text" placeholder="Title" name="original_title" value={original_title} onChange={this.onChange} />
                    </div>
                </div>

                <div className="col-5">

                    <div className="input-group mb-3">
                        <div >
                            <label className="input-left-text" htmlFor="inputGroupSelect01">Language</label>
                        </div>
                        <select onChange={this.onChange} name="original_language" value={original_language} className="custom-select" id="inputGroupSelect01">
                            {
                                <option key="hidden" value="Select a Language"
                                    hidden>Select a Language</option>
                            }
                            <option key="All" value="All"
                            >All</option>
                            {
                                languages.map((language) => {
                                    return (
                                        <option
                                            key={language}
                                            value={language}
                                        >{language}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="col-3">
                    <button className="search" 
                            type="button" 
                            onClick={this.searchMovie} 
                            disabled={(original_title === "" && original_language === (undefined || "All") )} > 
                            SEARCH
                    </button>
                </div>
            </div>
        )
    }
}
export default MovieSearch;