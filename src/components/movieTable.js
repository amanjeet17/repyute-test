import React from 'react';

const Moviestable = (props) => {
    const movies = props.movies
    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                    <th>Title</th>
                    <th>Language</th>
                    <th>Voters Average</th>
                </tr>
                {
                    movies.map((movie)=>{
                        return(
                            <tr key={movie.id}>
                                <td title={movie.original_title}>{movie.original_title}</td>
                                <td title={movie.original_language}>{movie.original_language}</td>
                                <td title={movie.vote_average}>{movie.vote_average}</td>
                            </tr>
                        )
                    })
                }
                </tbody>

            </table>
        </React.Fragment>
    )
}

export default Moviestable;