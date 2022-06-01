import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


function Detail() {
    const {id} = useParams()
    const [movieDetail, setMovies] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setMovies(json.data.movie)

    };
    useEffect(() => {
        getMovie();
    }, []);
    return <div>
        <h2>{movieDetail.title}</h2>
        <p>{movieDetail.year}</p>
        <p>{movieDetail.rating}</p>
        <details>{movieDetail.description_intro}</details>
    </div>;
}

export default Detail;