// import React from "react"
// import weatherData from "./WeatherData"
// import WeatherIcon from "./WeatherIcon"
// export default function WeatherForecast(props){
//     return (
//         <div className="weather">
//          <weatherData condition={props.condition} time={props.time} WeatherIcon={props.img}/>
//         </div>
//     )

// }
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