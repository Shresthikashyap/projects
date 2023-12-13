import React, { useContext, useState } from "react";
import Input from '../UI/Input.js'
import classes from './CandyItemForm.module.css'
import CartContext from "../../store/cart-context.js";

const CandyItemForm = (props) => {
    const cartContext = useContext(CartContext);
    const [localQuantity, setLocalQuantity] = useState(props.items.quantity || 'Out Of Stock');

    const addToCart = (event, quantity) => {
        event.preventDefault();
        cartContext.addItem({ ...props.items, quantity });
        setLocalQuantity((prevQuantity) => prevQuantity - quantity);
    }

    return (
        <form className={classes.form}>
            {localQuantity > 0 ? (
                <Input label="Quantity" input={{ value: localQuantity }} />
            ) : (
                <div style={{ color: 'red', fontSize: '24px' }}>Out of Stock</div>
            )}
            {localQuantity > 0 &&
            <div className={classes.buttonContainer}> 
            <button onClick={(e) => addToCart(e, 1)}>+1 Add</button>
            <button onClick={(e) => addToCart(e, 2)}>+2 Add</button>
            <button onClick={(e) => addToCart(e, 3)}>+3 Add</button>
            </div>}
        </form>
    );
}

export default CandyItemForm;
