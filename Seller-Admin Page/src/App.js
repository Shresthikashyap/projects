import React, { useState, useEffect } from 'react';

import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(parseFloat(localStorage.getItem('Total')) || 0);

  useEffect(() => {
    // Retrieve products from localStorage on component mount
    const storedProducts = JSON.parse(localStorage.getItem('Products')) || [];
    setProducts(storedProducts);
  }, []);

  const addProductHandler = (product) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, product];

      // Update total
      setTotal((prevTotal) => prevTotal + parseFloat(product.price));

      // Update localStorage
      localStorage.setItem('Total', total + parseFloat(product.price));
      localStorage.setItem('Products', JSON.stringify(updatedProducts));

      return updatedProducts;
    });
  };

  const deleteProductHandler = (product) => {
    console.log('delete this ', product.id);

    // Update total
    setTotal((prevTotal) => prevTotal - parseFloat(product.price));

    // Update localStorage
    localStorage.setItem('Total', total - parseFloat(product.price));

    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter((p) => p.id !== product.id);
      localStorage.setItem('Products', JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  return (
    <div>
      <ProductForm onAddProduct={addProductHandler} />
      <h2>Products</h2>
      {products.length > 0 && <ProductList items={products} onDeleteProduct={deleteProductHandler} />}
      <h3>Total price of products: {total}</h3>
    </div>
  );
}

export default App;
