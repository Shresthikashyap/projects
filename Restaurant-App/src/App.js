import React, { useState } from 'react';

import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

function App() {

  const[orders,setOrders] = useState([]);

  const addOrderHandler = (order) =>{
    setOrders(prevOrders => {
      const updateOrders = [...prevOrders];
      updateOrders.unshift({order});
      return updateOrders;
    }) 
  }

  if(orders.length > 0){
    console.log('here ',orders);
      <OrderList items={orders} />
  }

  return (
      <div>
        <OrderForm onPlaceOrder={addOrderHandler}/>
        {orders.length > 0 && <OrderList items={orders} />}
      </div>
  );
}

export default App;
