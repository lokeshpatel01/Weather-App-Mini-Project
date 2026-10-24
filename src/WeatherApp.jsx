import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import "./WeatherApp.css"
import { useEffect ,useState } from "react"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bhopal",
        temp: 24.02,
        tempMin: 23.05,
        tempMax: 25,
        humidity: 24,
        feelsLike: 24.02,
        weather: "Clouds"
    });
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        document.body.className = "clouds";
    }, []);

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
        //background image for different weather conditions:
        if(newinfo.weather.includes("thunderstorm")){
            document.body.className = "thunderstorm";
        }else if(newinfo.weather.includes("rain")){
            document.body.className = "rain";
        }else if(newinfo.weather.includes("snow")){
            document.body.className = "snow";
        }else if(newinfo.temp >25){
            document.body.className = "hot";
        }else if(newinfo.temp <=15){
            document.body.className = "cold";
        }else if(newinfo.weather.includes("clear sky")){
            document.body.className = "clearsky";
        }else if(newinfo.weather.includes("cloud")){
            document.body.className = "clouds";
        }

        getForecast(newinfo.city);
    }

    const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    let getForecast = async(city) => {
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonRes = await res.json();
            console.log(jsonRes);

            // //status check
            // console.log(res.status); //200
            // console.log(res.ok); //true

            if(!res.ok){
                console.log("Error occured in api: ", jsonRes.message);
            }
        
            let dailyForecast = [];

            let dates = new Set();

            for(let item of jsonRes.list){
                let date = item.dt_txt.split(" ")[0];

                if(!dates.has(date)){
                    dates.add(date);
                    dailyForecast.push(item);
                }
            }

            let formattedForecast = dailyForecast.map((item) => ({
                date : item.dt_txt.split(" ")[0],
                day : new Date(item.dt_txt).toLocaleDateString("en-US", {
                    weekday: "long"
                }),
                temp: Math.round(item.main.temp - 273),
                weather: item.weather[0].main,
                icon:  
                 item.weather[0].main === "Clear" 
                  ? "☀️" 
                  :item.weather[0].main === "Clouds"
                   ? "☁️"
                   :item.weather[0].main === "Rain"
                    ? "🌧️"
                    :item.weather[0].main === "Snow"
                     ? "❄️"
                     :item.weather[0].main === "Thunderstorm"
                      ? "⛈️"
                      :"🌤️",
            }));

            // console.log(formattedForecast);

            setForecast(formattedForecast);
            console.log(formattedForecast);
        }catch (e){
            console.log("error", e);
        }
    }


    return(
        <div className="weather-app">
            <h1 className="weather-title">🌤️ Weather App</h1>

            <div className="search-section">
                <SearchBox updateInfo={updateInfo}/>
            </div>

            <h2 className="location-title">📍 {weatherInfo.city}</h2>

            <div className="forecast">
                {
                    forecast.map((day) => (
                        <div className="forecast-card" key={day.date}>
                            <h3>{day.day}</h3>
                            <div className="forecast-icon">{day.icon}</div>
                            <p>{day.temp}°C</p>
                            <small>{day.weather}</small>
                        </div>
                    ))
                }
            </div>
            
            <InfoBox info={weatherInfo}/>
        </div>
    )
}