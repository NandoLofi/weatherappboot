import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherData = (props) =>{
    return(
    <>
    <p>
        <WeatherIcon img={props.img}/>
        <span>conditions:</span> 
        {props.condition}   
    </p>
    <p>
        <span>time:</span>
        {props.time}
    </p>
    </>
    )
}