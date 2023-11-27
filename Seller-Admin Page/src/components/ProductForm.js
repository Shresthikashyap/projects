import React,{useState} from 'react';

const ProductForm = (props) => {
  const [setPrice, setPriceHandler] = useState('');
  const [setName, setNameHandler] = useState('');


  const nameInputHandler = (event) =>{
    setNameHandler(event.target.value)
  }

  const priceInputHandler = (event) =>{
    setPriceHandler(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const product = {
      id: Math.random().toString(),
      name: setName,
      price: setPrice
    }

    props.onAddProduct(product);

    setNameHandler('')
    setPriceHandler('')
  }

    return (
    <div>
      <form onSubmit={formSubmitHandler}>
      <label>Product ID:</label>
      <input type="number" />
      <label>Product Name:</label>
      <input type="text" value={setName} onChange={nameInputHandler}/>      
      <label>Product Price:</label>
      <input type="number" value={setPrice} onChange={priceInputHandler}/>
      <button>Add Product</button>
      </form>
    </div>
    )
}

export default ProductForm;