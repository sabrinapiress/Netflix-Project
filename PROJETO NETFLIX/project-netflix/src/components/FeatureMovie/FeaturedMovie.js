import React from "react";
import './FeaturedMovie.css';

export default ({ items }) => {
    console.log(items)
    const firstDate = new Date(items?.first_air_date)
    const genres = []
    for (let i in items?.genres) {
       genres.push(items.genres[i].name)        
    }
   
    return (
        <div className="featuredMovieArea" style={{
            backgoundSize: '100%', 
            backgorundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${items?.backdrop_path})`,

        }}>
            <div className="featuredMovieItemVertival">
                <div className="featuredMovieItemHorizontal">
                    <div className="featuredMovieName">
                        {items ? items.original_name : null}
                    </div>
                    <div className="featuredMovieInfos">
                        <div className="featuredMoviePoints">{items ? items.vote_average : null} pontos</div>
                        <div className="featuredMovieYear">{firstDate.getFullYear()}</div>
                        <div className="featuredMovieSeasons">{items ? items.number_of_seasons : null} temporada{items?.number_of_seasons.length !== '1' ? 's':null}</div>
                    </div>
                    <div className="featuredMovieDescription">{items ? items.overview: null}</div>
                    <div className="featuredMovieBtn">
                        <a className="whatchBtn" href={`/what/${items?.id}`}> ▶ Assistir</a>
                        <a className="addMyListBtn" href={`/list/add/${items?.id}`}>+ Minha Lista</a>
                    </div>
                    <div className="featuredMovieGenres"> <strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </div>
    )
}
