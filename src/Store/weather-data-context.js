import React from "react";

const WeatherDataContext = React.createContext({
    current:[],
    forecast:[],
    location:[]

})

export default WeatherDataContext