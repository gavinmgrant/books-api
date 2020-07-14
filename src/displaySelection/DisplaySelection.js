import React from "react";

export default function DisplaySelection(props) {
    return (
        <select
            onChange={
                (sel => props.printChangeHandler(sel.target.value)) ||
                (sel => props.bookChangeHandler(sel.target.value))
            }
        >
            {props.bookOptions} 
            {props.printOptions}
        </select>
    );
}