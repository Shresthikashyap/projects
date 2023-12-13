import React from 'react';
import classes from './CandyItem.module.css';
import CandyItemForm from './CandyItemForm'

const CandyItem = (props) =>{
   {console.log('in meal form ',props)}
    return(
        <li className={classes.Candy}>
            <div>
                <h3 >{props.name}</h3>
                <div className ={classes.description}>{props.description}</div>
                <div className ={classes.price}>{props.price}</div>          
            </div>
          <div>
            <CandyItemForm id={props.id} items={props}/>
          </div>
        </li>
    )
}

export default CandyItem