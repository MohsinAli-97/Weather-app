import React,{useContext} from "react";
import classes from './WeatherInfo.module.css'
import Card from "../UI/Card";
import WeatherDataContext from "../../Store/weather-data-context";

const WeatherInfo = () =>{
    const weatherCtx = useContext(WeatherDataContext)
   

   


   
    return (
        <Card >
            <div className={classes.container}>
               
            
        <img className='image' src={weatherCtx.current.condition.icon} alt='nothing' />
        <p className={classes.date}>Today, 7 July</p>
        <h5>{weatherCtx.current.temp_c} °C</h5>
        <p>{weatherCtx.current.condition.text}</p>
        <p>wind | {weatherCtx.current.wind_kph} km/h </p>
        <p>hum | {weatherCtx.current.humidity} %</p>
        </div>
        </Card> 
        
       
        
    )
}

export default WeatherInfo