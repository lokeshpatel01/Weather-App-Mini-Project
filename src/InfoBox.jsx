import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infoBox.css";

export default function InfoBox({info}){
    const init_URL = "https://images.unsplash.com/photo-1776260701539-c5c27fd57364?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_URL = "https://images.unsplash.com/photo-1595178200697-783a4164aa83?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_URL = "https://images.unsplash.com/photo-1760907219840-9702d135b22d?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainy_URL = "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.jpg?s=2048x2048&w=is&k=20&c=mewnYZ8WxMj38N9MqXLhUC-huiT0wkuEXssd0VTYDaU=";
    return(
        <div className="infoBox">
           
            <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image= {info.humidity > 80 ? rainy_URL : info.temp > 20 ? hot_URL : cold_URL }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <SunnyIcon/> : <AcUnitIcon/> }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>The weather can be described as <b>{info.weather}</b> and Feels Like = {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}