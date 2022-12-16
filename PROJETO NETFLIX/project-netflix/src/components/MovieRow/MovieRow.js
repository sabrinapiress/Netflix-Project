import React, { useState } from "react";
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0)
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }
    const handleRigthArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 150
        if((window.innerWidth - listW) > x){
            x = window.innerWidth - listW - 250
        }
        setScrollX(x)
    }
    return (
        <div className="movieRowArea">
            <h2 className="movieRowTitle">{title}</h2>
            <div className="movieRowLeft" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }}  />
            </div>
            <div className="movieRowRigth" onClick={handleRigthArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }}  />
            </div>
            <div className="movieRowListArea">
                <div className="movieRowList" style={{ marginLeft: scrollX, width: items.results.length * 250 }}>
                    {items.results.length > 0 && items.results.map((item, key) => {
                        return (
                            <div className="movieRowItem" key={key}>
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

// export default MovieRow