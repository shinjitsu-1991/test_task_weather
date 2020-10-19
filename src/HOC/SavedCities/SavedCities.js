import React from "react";
import {connect, useDispatch} from "react-redux";
import HelpItem from "../../components/HelpItem";
import {editCityInput} from "../../redux/actions";

const SavedCities = (props) => {
    const dispatch = useDispatch();

    const prevSearchedCities = () => {
        let cityStorageName = 'cities_history_storage';
        let historyStorage = window.localStorage.getItem(cityStorageName);
        if(historyStorage && props.cityInput) {
            let parsedStorage = JSON.parse(historyStorage);
            let rightItems = parsedStorage.filter((item) => {
                if(item.toLowerCase().includes(props.cityInput.toLowerCase())) {
                    return item;
                }
            })
            if(rightItems) {
                return rightItems;
            }
        }
    }

    const editSearchedCity = (value) => {
        dispatch(editCityInput(value));
    }

    let data = prevSearchedCities()
    if(data) {
        let items = data.map((item) => {
            return <HelpItem
                clickHandler={editSearchedCity}
                key={item}
                value={item}
            />;
        })
        if(items.length) {
            return (<div className="weather-app__saved-cities"><i>Already has been searched: </i>{items}</div>);
        }
    }
    return '';
}

const SavedCitiesStateToProps = (state) => {
    return {
        cityInput: state.app.cityInput,
    }
}

export default connect(SavedCitiesStateToProps)(SavedCities);