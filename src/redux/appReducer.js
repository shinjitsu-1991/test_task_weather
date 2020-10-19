import {
    SEARCH_WEATHER_IN_CITY,
    EDIT_LOAD_STATE,
    EDIT_CITY_INPUT,
    EDIT_WEATHER_IN_CITY,
    EDIT_ERROR_STATE
} from "./types";

const initialState = {
    cityInput: '',
    load: false,
    weatherInCity: '',
    error: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_LOAD_STATE:
            return {...state, load: action.payload};
        case EDIT_CITY_INPUT:
            return {...state, cityInput: action.payload};
        case EDIT_WEATHER_IN_CITY:
            return {...state, weatherInCity: action.payload};
        case EDIT_ERROR_STATE:
            return {...state, error: action.payload};
        case SEARCH_WEATHER_IN_CITY:
            return state;
        default:
            return state;
    }
}