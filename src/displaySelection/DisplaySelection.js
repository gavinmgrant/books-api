import React from "react";

export default function DisplaySelection(props) {
    return (
        <select
            onChange={
                (printType => props.printChangeHandler(printType.target.value)) ||
                (bookType => props.bookChangeHandler(bookType.target.value))
            }
        >
            {props.bookOptions} 
            {props.printOptions}
        </select>
    );
}