import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm'

const MealItem = (props) =>{
   {console.log('in meal form ',props)}
    return(
        <li className={classes.meal}>
            <div>
                <h3 >{props.name}</h3>
                <div className ={classes.description}>{props.description}</div>
                <div className ={classes.price}>{props.price}</div>            
            </div>
          <div>
           {console.log('props id', props)}
            <MealItemForm id={props.id} items={props}/>
          </div>
        </li>
    )
}

export default MealItem