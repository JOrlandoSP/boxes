import React from "react";
import DeleteButton from "./DeleteButton";

export default function Box(props) {

    const color = props.on ? "black" : "white"

    return(
    <div
    className="box"
    style={{backgroundColor: color}}
    id={props.id}
    onClick={() =>props.toggle(props.id)}
    >
    <DeleteButton
    deleteBox={props.deleteBox}
    id={props.id}
    />   
    </div>
    )
}
