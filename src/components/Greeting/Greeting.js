import React from "react";
import classes from './Greeting.module.css'

const Greeting = () =>{
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let hours = date.getHours()
let minutes= date.getMinutes()

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;
let currentTime = `${hours}:${minutes}`

    return (
        <div className={classes.container}>
            <p className={classes.time}>{currentTime} AM</p>
            <p className={classes.date}>{currentDate}</p>
            <p className={classes.text}>Good morning</p>
        </div>
    )
}

export default Greeting