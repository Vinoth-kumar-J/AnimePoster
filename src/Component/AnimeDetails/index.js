import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedAnime } from "../redux/actions/animeActions";

const AnimeDetails = () => {
    const anime = useSelector((state) => state.anime)
    const {animeId} = useParams();
    const dispatch = useDispatch();

    const fetchAnimeDetail = async() => {
        const response = await axios
        .get(`https://api.jikan.moe/v4/anime/${animeId}`)
        .catch((err)=>{
            console.log("Err",err)
        })
        dispatch(selectedAnime(response.data.data))
    }

    useEffect(() => {
        fetchAnimeDetail()
    },[animeId]);

    return(
        <>
        <div className="container-fluid m-5 ">
                {Object.keys(anime).length === 0? (
                    <div>...Loading</div>
                ) : (
                    <div class="row">
                        <div class="col-md-4">
                        <img src={anime.images.webp.large_image_url} />
                        </div>
                        <div class="col-md-8">
                            <h1>Titles: {anime.title}</h1>
                            <h5><b>Release Year:</b> {anime.year}</h5>
                            <h5><b>Rating:</b> {anime.rating}</h5>
                            <h6><b>Synopsis:</b> {anime.synopsis}</h6>
                        </div>
                    </div>
                )}
        </div>
        </>
    )
}

export default AnimeDetails;