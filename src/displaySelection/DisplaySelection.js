import React from "react";

export default function DisplaySelection(props) {
    return (
        <select
            onChange={(event) => props.changeHandler(event.target.value)}
        >
            {props.bookOptions} 
            {props.printOptions}
        </select>
    );
}