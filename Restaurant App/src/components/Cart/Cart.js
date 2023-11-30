import React, { useContext } from "react";

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from "../../store/cart-context";

const Cart = (props) =>{

    const cartCntxt = useContext(CartContext);
    console.log('cartcnxt ',cartCntxt.items)
    const cartitems = (<ul className={classes['cart-items']}>
        
        {cartCntxt.items.map((item) =>{
            return <li>{item.name} {item.price} {item.quantity}</li>;
        }
    )}
    </ul>
    )
    console.log('cart context ',cartCntxt)
    return (
        <Modal onClick={props.onClose}>
            {cartitems}
            <div className={classes.total}>
                <span>Total</span>
                <span>₹ {cartCntxt.totalAmount}</span>

                <div className={classes.actions}>
                    <button className={classes['button-alt']}  onClick={props.onClose}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart;