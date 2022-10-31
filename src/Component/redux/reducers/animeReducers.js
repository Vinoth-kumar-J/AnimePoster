import { ActionTypes } from "../constants/action-types";

const initialState = {
    animes:[],
}
export const animeReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ANIME:
            return {
                ...state,
                animes: payload,
            }
    
        default:
            return state;
    }
}

export const selectedAnimeReducer = (state= {},{type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_ANIME:
            return{
                ...state,
                ...payload,
            }
    
        default:
            return state
    }
}