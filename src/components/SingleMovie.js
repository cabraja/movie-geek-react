import React from 'react'

const SingleMovie = ({title,poster_path,vote_average,overview}) => {
    return (
        <article>
            <div className="movie-img" style={poster_path ? {backgroundImage:`url(https://image.tmdb.org/t/p/w500${poster_path})`} : {backgroundColor:'gainsboro'}} >
                <div className="movie-desc">{overview}</div>
            </div>
            <div className="movie-info">
                <h2>{title}</h2>
                <h3>{vote_average || "N/A"}	&#9733;</h3>
            </div>
        </article>
    )
}

export default SingleMovie
