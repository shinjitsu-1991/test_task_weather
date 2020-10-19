import React from "react";
import CitySearch from "../../HOC/CitySearch";
import SavedCities from "../../HOC/SavedCities";
import WeatherInCity from "../WeatherInCity/WeatherInCity";
import {connect} from "react-redux";
import Spinner from "../Spinner";
import './App.scss';

const App = (props) => {
    const currentComponent = () => {
        if(props.error) {
            return 'Error: city is not found or problem with network';
        }
        if(props.load) {
            return <Spinner />;
        }
        return <WeatherInCity />;
    }
    return (
        <div className="weather-app">
            <CitySearch />

            <SavedCities />

            {currentComponent()}
        </div>
            );
}

const AppStateToProps = (state) => {
    return {
        error: state.app.error,
        load: state.app.load,
    }
}


export default connect(AppStateToProps)(App);