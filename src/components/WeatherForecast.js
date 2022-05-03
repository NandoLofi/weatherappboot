import React from "react"
import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData"
export default function WeatherForcast(props) {
    return (
        <div className="weather">
          <WeatherIcon img={props.img}/>
          <WeatherData condition={props.condition} time={props.time}/>
        </div>
        )
}