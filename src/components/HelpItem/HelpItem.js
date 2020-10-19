import React from "react";

const HelpItem = (props) => {
    const clickHandler = () => {
        if(props.clickHandler) {
            props.clickHandler(props.value);
        }
    }

    return <div className="help-item" onClick={() => clickHandler()}>{props.value}</div>;
}

export default HelpItem;