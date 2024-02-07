import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [{
  id: 1,
  title: "Product 1",
  price: 10.99,
  description: "This is the description for Product 1."
},
{
  id: 2,
  title: "Product 2",
  price: 19.99,
  description: "This is the description for Product 2."
},
{
  id: 3,
  title: "Product 3",
  price: 7.99,
  description: "This is the description for Product 3."
}
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product)=>{
          return <ProductItem
            key={product.id}
            id= {product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />        
        })    
        }
      </ul>
    </section>
  );
};

export default Products;
