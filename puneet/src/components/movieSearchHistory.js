import React from 'react'

const MovieSearchHistory = (props) => {

    const deleteMovieHistory =(movie)=>{
        console.log(movie)
    }

    const deleteAllHistory = ()=>{
        console.log("deleteAllHistory triggered")
    }

    const history = props.history
    return (
        <React.Fragment>
            <table>
                <tr>
                    <th> Search history</th>
                </tr>
                {
                    history.map((movie, index) => {
                        return (
                            <tr>
                                <td>{index}</td>
                                <td>{movie.title}</td>
                                <td onClick={() => deleteMovieHistory(movie)}>Delete</td>
                            </tr>
                        )
                    })
                }
            </table>
            <button type="button" onClick={deleteAllHistory}> Delete All</button>
        </React.Fragment>
    )
}

export default MovieSearchHistory;