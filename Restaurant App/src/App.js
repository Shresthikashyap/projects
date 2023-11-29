import React, { Fragment, useState } from "react";

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

  const[cartIsShown, setCartVisible] = useState(false);

  const showCart = () => {
    setCartVisible(true);
  }

  const hideCart = () =>{
    setCartVisible(false)
  }

  return (
      <Fragment>
        {cartIsShown && <Cart onClose={hideCart}/>}
        <Header onShowcart={showCart}/>
        <main>
           <Meals/>
        </main>
      </Fragment>
  );
}

export default App;
