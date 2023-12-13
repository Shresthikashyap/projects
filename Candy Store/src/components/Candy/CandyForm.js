import React, { useState } from 'react';

import classes from './CandyForm.module.css'

const CandyForm = (props) => {

    const [setCandy,setCandyHandler] = useState('');
    const [setDesc,setDescHandler] = useState('');
    const [setPrice,setPriceHandler] = useState('');
    const [setQuantity,setQuantityHandler] = useState('');

    const CandyInputHandler = (event) =>{
        setCandyHandler(event.target.value);
    }

    const descInputHandler = (event) =>{
        setDescHandler(event.target.value);
    }
 
    const priceInputHandler = (event) =>{
        setPriceHandler(event.target.value);
    }
    
    const quantityInputHandler = (event) =>{
        setQuantityHandler(event.target.value);
    }    

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const stock = {
            id: Math.random().toString(),
            Candy: setCandy,
            desc:setDesc,
            price:setPrice,
            quantity:setQuantity
        }

        props.onAddStock(stock);

        setCandyHandler('');
        setDescHandler('');
        setPriceHandler('');
        setQuantityHandler('');
    }
    return (
        <div className={classes.summary}>
            <h2>Candy Store</h2>
            <form onSubmit={formSubmitHandler}>
                <label>Candy Name</label>
                <input type="text" value={setCandy} onChange={CandyInputHandler}/>
                <label>Description</label>
                <input type="text" value={setDesc} onChange={descInputHandler}/>
                <label>Price</label>
                <input type="text" value={setPrice} onChange={priceInputHandler}/>
                <label>Quantity</label>
                <input type="number" value={setQuantity} onChange={quantityInputHandler}/>
                <button>Add Candy</button>
            </form>
        </div>
    )
}

export default CandyForm