import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bhopal",
        temp: 24.02,
        tempMin: 23.05,
        tempMax: 25,
        humidity: 24,
        feelsLike: 24.02,
        weather: "clear Sky"
    })

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}