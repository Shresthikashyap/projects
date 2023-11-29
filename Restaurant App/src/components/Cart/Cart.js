import React from "react";

import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) =>{

    const cartitems = (<ul>
        {[{id:'c1' , name:'sushi', description: 'japanese ki aulad', price: '₹120'}].map((item) =>{
            return <li>{item.name}</li>
    })}
    </ul>
    )

    return (
        <Modal onClick={props.onClose}>
            {cartitems}
            <div className={classes.total}>
                <span>Total</span>
                <span>₹800</span>

                <div className={classes.actions}>
                    <button className={classes['button-alt']}  onClick={props.onClose}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart;