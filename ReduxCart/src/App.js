import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { Fragment, useEffect, useState } from 'react';
import { cartActions } from './components/store/cart-slice';
import { uiActions } from './components/store/ui-slice'; // Assuming you have this file

//let isInitial = false;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const [requestInProgress, setRequestInProgress] = useState(false);

  useEffect(() => {
    const sendCartData = async () => {
      try {
        setRequestInProgress(true);
    
           dispatch(uiActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending cart Data"
        }));  


        const response = await fetch('https://react-f984f-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(cart)
        });

        if (response.ok) {
            dispatch(uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Cart Data Sent Successfully"
          }));   

        }        
      } catch (err) {
          dispatch(uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Cart Data not Sent Successfully"
        }));    

      }finally{
        setRequestInProgress(false);
      }
    }

    //if (!isInitial) {

      sendCartData();
    // } else {
    //   isInitial = false;
    // }
  }, [cart,dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://react-f984f-default-rtdb.firebaseio.com/cart.json');
        const data = await response.json();
        dispatch(cartActions.replaceCart(data));
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Fragment>
      {requestInProgress && notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
