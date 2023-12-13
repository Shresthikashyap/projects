import React, { useState } from 'react';

import classes from './AvailableCandy.module.css';
import CandyItem from './CandyItem';
import Card from '../UI/Card';
import CandyForm from './CandyForm';

const AvailableCandy= () =>{

    const [setAvailableCandy,setAvailableCandyHandler] = useState([]);

    const addCandyHandler = (Candy) =>{
        setAvailableCandyHandler((prevCandy) => {
            const updatedCandy = [...prevCandy,Candy];
            return updatedCandy;
        })
    }

    const availableCandy= setAvailableCandy.map((Candy) =>
    <CandyItem key={Candy.id} id={Candy.id} name={Candy.Candy} description={Candy.desc} price={Candy.price} quantity={Candy.quantity}/>)
    return (
        <section className={classes.Candy}>
            <Card>
               <CandyForm onAddStock={addCandyHandler}/>
               <ul>{availableCandy}</ul>
            </Card>
        </section>
    )
}

export default AvailableCandy;
