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
    const rainy_URL = "https://plus.unsplash.com/premium_photo-1699626666262-1314de6e6896?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    return(
        <div className="infoBox">
           
            <div className='card-container'>
            <Card sx={{ width: "420px",
                maxWidth: "100%",
                borderRadius: "24px",
                marginBottom: "1%"
                }}>
            <CardMedia
                sx={{ height: 140 }}
                image= {info.weather.includes("rain") ? rainy_URL : info.temp > 25 ? hot_URL : info.temp <= 15 ? cold_URL : init_URL }
                title="green iguana"
            />
            <CardContent>
                <Typography sx={{textAlign: "center", fontWeight: "bold" ,mb: 1}} gutterBottom variant="h5" component="div">
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