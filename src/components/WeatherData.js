import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherData(props) {
    return (
        <>
            <p><span>conditions:</span> {props.condition}</p>
            <p><span>time:</span> {props.time}</p>
        </>
    )
}