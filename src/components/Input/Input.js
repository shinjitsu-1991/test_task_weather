import React, {useEffect, useState} from "react";

const Input = (props) => {
    const inputLabel = props.inputLabel ? props.inputLabel : '';
    const btnName = props.btnName ? props.btnName : 'Search';

    const changeEventHandler = (e) => {
        if(props.editValue) {
            props.editValue(e.value);
        }
    }

    const submitEventHandler = () => {
        if(props.valueSubmit) {
            props.valueSubmit()
        }
    }

    return(
        <div className="weather-app__input-wrap input-wrap">
            <input
                onChange={(e) => changeEventHandler(e.target)}
                value={props.initialValue}
                placeholder={inputLabel}
                type="text"/>
            <button onClick={() => submitEventHandler()}>
                {btnName}
            </button>
        </div>
        );
}

export default Input;