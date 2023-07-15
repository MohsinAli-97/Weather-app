import React from 'react'
import classes from './Card.module.css'

const Card = (props) =>{

    const randomColor =  ("rgb(" + Math.floor( 0)
    + "," + Math.floor(Math.random() * (255)) + ","
    + Math.floor(255) + ")");

    return(
        <div className={classes.card} style={{backgroundColor: randomColor}} >
            {props.children}
        </div>
    )
}

export default Card