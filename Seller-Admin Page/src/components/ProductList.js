import React from 'react';


const ProductList = props => {

    console.log('in order lit ',props);

    const deleteProductHandler = (product) => {
      console.log('delete this ', product.id);
      // Trigger the onDeleteProduct function from the parent component
      props.onDeleteProduct(product);
    };
    
  return (
    <ul >
      {props.items.map(item => {
        const product = item;
        
        return(
        <li
          key={product.id} > 
          {product.name} {product.price} 
          <button onClick={()=>deleteProductHandler(product)}>Delete </button>
        </li>
      )})}
    </ul>
  );
};

export default ProductList;
