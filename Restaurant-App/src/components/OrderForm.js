import React,{useState} from 'react';

const OrderForm = (props) => {
  const [setPrice, setPriceHandler] = useState('');
  const [setDish, setDishHandler] = useState('');
  const [setTable, setTableHandler] = useState(1);


  const dishInputHandler = (event) =>{
    setDishHandler(event.target.value)
  }

  const priceInputHandler = (event) =>{
    setPriceHandler(event.target.value)
  }

  const tableInputHandler = (event) =>{
    setTableHandler(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(setPrice,' ',setDish,' ',setTable);

    const order = {
      dish: setDish,
      price: setPrice,
      table: setTable
    }

    props.onPlaceOrder(order);

    setDishHandler('')
    setPriceHandler('')
    setTableHandler('')
  }

    return (
    <div>
      <form onSubmit={formSubmitHandler}>
      <label>Unique Order ID:</label>
      <input type="number" />
      <label>Choose Dish:</label>
      <input type="text" value={setDish} onChange={dishInputHandler}/>      
      <label>Choose Price:</label>
      <input type="number" value={setPrice} onChange={priceInputHandler}/>
      <label>Choose a Table:</label>
      <select name="" id="table" value={setTable} onChange={tableInputHandler}>
        <option value="1">Table 1</option>
        <option value="2">Table 2</option>
        <option value="3">Table 3</option>
      </select>
      <button>Order</button>
      </form>
    </div>
    )
}

export default OrderForm;