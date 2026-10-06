import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b50357c108de9fe90313a7bb5fb9f6f4";
    
    
    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: Math.floor(jsonResponse.main.temp - 273),
                tempMin: Math.floor(jsonResponse.main.temp_min - 273),
                tempMax: Math.floor(jsonResponse.main.temp_max - 273),
                humidity: jsonResponse.main.humidity,
                feelsLike: Math.floor(jsonResponse.main.feels_like - 273),
                weather: jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/> <br></br> <br></br>
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>Send</Button>
            </form>
            {error && <p style={{color: "red"}}>No Such Place Exist.</p>}
        </div>
    )
}