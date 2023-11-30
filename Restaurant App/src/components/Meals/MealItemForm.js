import React, { useContext } from "react";
import Input from '../UI/Input.js'

import classes from './MealItemForm.module.css'
import CartContext from "../../store/cart-context.js";

const MealItemForm = (props) =>{

    const cartcnxt = useContext(CartContext);

    const addToCart = (event) => {
        event.preventDefault();
       
        const quantity = document.getElementById('amount_'+ props.id).value;
        cartcnxt.addItem({...props.items,quantity:quantity});
    }

    return <form className={classes.form}>
        <Input label="Amount" input={{
            id:'amount_'+ props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1' }}/>
            
        <button onClick={addToCart}>+ Add</button>
    </form>
}

export default MealItemForm;