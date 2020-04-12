import React from 'react'

const MovieSearchHistory = (props) => {
    const history = props.history
    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                        <td colSpan="3">
                            Search history
                    <span> <button type="button" onClick={props.deleteAllHistory} disabled={history.length === 0}> Delete All</button></span>

                        </td>

                    </tr>
                    {
                        history.map((movie, index) => {
                            return (
                                <tr>
                                    <td align="right">{index}</td>
                                    <td>{movie.filter}</td>
                                    <td onClick={() => props.deleteMovieHistory(index)}>Delete</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </React.Fragment>
    )
}

export default MovieSearchHistory;