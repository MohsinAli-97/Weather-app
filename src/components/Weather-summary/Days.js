import React,{useContext,useState} from "react";
import classes from "./Days.module.css";
import Day from "./Day";
import WeatherDataContext from "../../Store/weather-data-context";

const Days = () => {
  
  const weatherCtx=useContext(WeatherDataContext)
  
  if(!weatherCtx.forecast){
    return <p>loading forecast data</p>
  }

  const weatherForecastData = weatherCtx.forecast
  console.log(weatherForecastData.forecastday)
  
   

  const days = [];
  for(let i=0; i<weatherForecastData.forecastday.length;i++){
    console.log(weatherForecastData.forecastday[i])
    days.push(weatherForecastData.forecastday[i])
   
  }
  console.log(days)

  

  

  return (
    <div className={classes.container}>
      {days.map((day) => (
        <Day key={day.date} item={day}></Day>
      ))}
    </div>
  );
};

export default Days;
