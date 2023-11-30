import React, {useState} from 'react';
import CartContext from './cart-context';

const CartProvider = props => {

    const [items,updateItems] = useState([]);
    const [total,updateTotal] = useState(0);

    const addItemToCartHandler = item =>{
       
        updateItems([...items,item]);

        const priceNumber = Number(item.price.replace('₹', ''));
        updateTotal(total+priceNumber)
    };

    const removeItemFromCartHandler = id =>{};

    const cartContext = {
        items: items,
        totalAmount: total,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>
}

export default CartProvider