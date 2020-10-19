import React from "react";
import {connect} from "react-redux";

const WeatherInCity = (props) => {
    const data = props.weatherInCity;

    const editKelvinToCels = (val) => {
        return (val - 273.15).toFixed(2);
    }

    if(props.error) {
        return <>
            <div>error: such a city does not exist or you have problems with network</div>

        </>;
    }

    if(data) {
        let parsedData = JSON.parse(data);
        return <div>
            <div>weather in {parsedData.name} - {parsedData.weather[0].description}</div>
            <div>temp form {editKelvinToCels(parsedData.main.temp_min)}&#176; to {editKelvinToCels(parsedData.main.temp_max)}&#176;, and feels like {editKelvinToCels(parsedData.main.feels_like)}&#176;</div>
        </div>
    }
    return '';
}

const WeatherInCityStateToPros = (state) => {
    return {
        weatherInCity: state.app.weatherInCity,
        error: state.app.error,
    }
}

export default connect(WeatherInCityStateToPros)(WeatherInCity);