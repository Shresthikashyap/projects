import React, {useState} from 'react';
import CartContext from './cart-context';

const CartProvider = props => {

    const [items,updateItems] = useState([]);
    const [total,updateTotal] = useState(0);

    const addItemToCartHandler = item =>{

        const existingItemCartIndex = items.findIndex((i) => i.id === item.id)
       
        if(existingItemCartIndex === -1){
            updateItems([...items,item]);
        }else{
            const updatedItems = [...items];
            updatedItems[existingItemCartIndex].quantity = Number(updatedItems[existingItemCartIndex].quantity)+1;
            updateItems(updatedItems);
        }

        const priceNumber = Number(item.price.replace('₹', ''));
        updateTotal(total+priceNumber);
    };

    const removeItemFromCartHandler = id =>{

        const itemToRemove = items.find((item) => item.id === id);
         
        const updatedItems = [...items];
        if(Number(itemToRemove.quantity) === 0){
            updatedItems.splice(itemToRemove,1);
            updateItems(updatedItems);
        }
        else{
            
            itemToRemove.quantity = Number(itemToRemove.quantity)-1;
            const priceNumber = Number(itemToRemove.price.replace('₹', ''));
            updateTotal(total - priceNumber);
        }
        
    };

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