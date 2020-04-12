import React from 'react';

const Moviestable = (props) => {
    const movies = props.movies
    console.log(props.movies)
    return (
        <React.Fragment>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Language</th>
                    <th>Voters Average</th>
                </tr>
                {
                    movies.map((movie)=>{
                        return(
                            <tr>
                                <th>{movie.original_title}</th>
                                <th>{movie.original_language}</th>
                                <th>{movie.vote_average}</th>
                            </tr>
                        )
                    })
                }
            </table>
        </React.Fragment>
    )
}

export default Moviestable;