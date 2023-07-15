import { useEffect, useState } from "react";
import WeatherDataContext from "./weather-data-context";
import axios from "axios";

// const defaultWeatherData={
//     current:[],
//     forecast:[],
//     location:[]

// };

const WeatherDataProvider = (props) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        " http://api.weatherapi.com/v1/forecast.json?key=5129a5e1b353453bb77111540230707&q=Islamabad&days=7"
      );
      setWeatherData(response.data);
    })();

    // getData()


    //     const getData = async () =>{
    //         const response = await  axios.get(' http://api.weatherapi.com/v1/forecast.json?key=5129a5e1b353453bb77111540230707&q=Islamabad&days=7')
    //         setWeatherData(response.data)
    //     }
    //    getData()

    //  axios.get(' http://api.weatherapi.com/v1/forecast.json?key=5129a5e1b353453bb77111540230707&q=Islamabad&days=7')
    // .then( function (response){
    //     setWeatherData(response.data)
    // })

    return () => {};
  }, []);

//   async function getData () {
//     try{
//         const response = await axios.get(
//             " http://api.weatherapi.com/v1/forecast.json?key=5129a5e1b353453bb77111540230707&q=Islamabad&days=7"
//           );
//           setWeatherData(response.data);
//     }
//     catch{

//     }
//   }

  console.log(weatherData)
  if (!weatherData) {
    return <p>Loading weather data...</p>; // Display a loading message while fetching data
  }
  //console.log(weatherDataContext)

  return (
    <WeatherDataContext.Provider value={weatherData}>
      {props.children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataProvider;
