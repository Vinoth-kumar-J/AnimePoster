import { combineReducers } from "redux";
import cartReducer from "../../WatchList";
import { animeReducer, selectedAnimeReducer } from "./animeReducers";



export const reducers = combineReducers({
    allAnime: animeReducer,
    anime: selectedAnimeReducer,
    cart: cartReducer,

})