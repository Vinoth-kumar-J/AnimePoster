import { ActionTypes } from "../constants/action-types"

export const setAnime = (animes) => {
    return{
        type: ActionTypes.SET_ANIME,
        payload: animes,
    };
};

export const selectedAnime = (anime) => {
    return{
        type: ActionTypes.SELECTED_ANIME,
        payload: anime,
    };
};
