import {takeEvery, select, put, call} from 'redux-saga/effects';
import {
    EDIT_LOAD_STATE,
    EDIT_WEATHER_IN_CITY,
    SEARCH_WEATHER_IN_CITY, EDIT_ERROR_STATE
} from "./types";

export function* sagaWatcher() {
    yield takeEvery(SEARCH_WEATHER_IN_CITY, searchWeatherInCity)
}

function* searchWeatherInCity  () {
    yield put({type:EDIT_LOAD_STATE, payload: true});
    const state = yield select();
    const cityName = state.app.cityInput;
    const apiKey = 'd6500d6d854762e1d9d736329acc8a45';//must be realize from .env variable
    const weatherData = yield call(getFetchedData,`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    if(!weatherData) {
        yield put({type: EDIT_ERROR_STATE, payload: true});
    } else {
        editHistoryStorage(cityName);
        yield put({type: EDIT_WEATHER_IN_CITY, payload: JSON.stringify(weatherData)});
    }
    yield put({type:EDIT_LOAD_STATE, payload: false});
}

async function getFetchedData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            if(response.status === 404) {
                if(data.cod === "404") {
                    console.log('city is not found');
                } else {
                    console.log('network error');
                }
            }
        }
    } catch (e) {
        console.log('network error');
    }
}

function editHistoryStorage(city) {
    let cityStorageName = 'cities_history_storage';
    let historyStorage = window.localStorage.getItem(cityStorageName);
    if(!historyStorage) {
        let newObj = [city];
        window.localStorage.setItem(cityStorageName, JSON.stringify(newObj));
    } else {
        let parsedStorage = JSON.parse(historyStorage);
        if(!parsedStorage.includes(city)) {
            parsedStorage.push(city);
        }
        window.localStorage.setItem(cityStorageName, JSON.stringify(parsedStorage));
    }
}