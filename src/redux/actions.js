import {
    EDIT_LOAD_STATE,
    EDIT_CITY_INPUT,
    EDIT_WEATHER_IN_CITY,
    SEARCH_WEATHER_IN_CITY,
    EDIT_ERROR_STATE
} from "./types";


export function editCityInput(city) {
    return {
        type: EDIT_CITY_INPUT,
        payload: city
    }
}

export function searchWeatherInCity() {
    return {
        type: SEARCH_WEATHER_IN_CITY,
    }
}

export function editLoadState(state) {
    return {
        type: EDIT_LOAD_STATE,
        payload: state
    }
}

export function editWeatherInCity(data) {
    return {
        type: EDIT_WEATHER_IN_CITY,
        payload: data
    }
}

export function editErrorStatus() {
    return {
        type: EDIT_ERROR_STATE,
    }
}