import React from "react"
import WeatherIcon from "./WeatherIcon"
import weatherData from "./WeatherData"
export default function WeatherForecast(props){
    return (
        <div className="weather">
         <weatherData condition={props.condition} time={props.time}/>
        </div>
    )

}