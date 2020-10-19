import React from "react";
import Input from "../../components/Input";
import {connect, useDispatch} from "react-redux";
import {editCityInput, searchWeatherInCity} from "../../redux/actions";

const CitySearch = (props) => {
    const dispatch = useDispatch();

    const editSearchCity = (value) => {
        dispatch(editCityInput(value));
    }

    const searchWeather = () => {
        dispatch(searchWeatherInCity())
    }

    return (<>
    <Input
        editValue={editSearchCity}
        initialValue={props.cityInput}
        inputLabel="Enter city name for know weather"
        btnName="Search"
        valueSubmit={searchWeather}
    /></>)
}

const CitySearchStateToProps = (state) => {
    return {
        cityInput: state.app.cityInput,
        load: state.app.load,
        error: state.app.error
    }
}

export default connect(CitySearchStateToProps)(CitySearch);