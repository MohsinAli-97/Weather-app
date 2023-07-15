import React from "react";
import Card from "../UI/Card";
import classes from './Day.module.css'

const Day = (props) =>{

  console.log(props)
        return (
           
           <Card>
             <div className={classes.container} >
                
                <img src={props.item.day.condition.icon} alt="name" className={classes.image} />
                <p className={classes.pStyle} >{props.item.date}</p>
                <p className={classes.pStyle}>{props.item.day.avgtemp_c}</p>
                
                </div>
            </Card>
            
        )
}

export default Day