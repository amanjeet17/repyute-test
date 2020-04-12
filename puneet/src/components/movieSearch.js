import React, { Component } from 'react'

class MovieSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            language: "select a language",
            languages: []
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

    searchMovie = ()=>{
        console.log("searchMovie trig",this.state)
        this.props.filterSearch(this.state)
    }

    onChange =(e)=>{
        console.log("onChange",{[e.target.name]:e.target.value})
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        const { name, language,languages } = this.state
        return (
            <div>
                <input type="text" placeholder="Title" name="name" value={name} onChange={this.onChange} />
                <select onChange={this.onChange} name="language" value={this.state.language} >
                    {
                        <option value={language}
                            hidden>{language}</option>
                    }
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
                <button type="button" onClick={this.searchMovie} > SEARCH</button>
            </div>
        )
    }
}
export default MovieSearch;