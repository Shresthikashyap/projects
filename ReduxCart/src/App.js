import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification'
import { Fragment, useEffect } from 'react';
import { uiActions } from './components/store/ui-slice';

let isInitial = true; // This is the global variable

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      try {
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
        if (isInitial) {
          isInitial = !isInitial;
          return;
        }
      } catch (err) {
        dispatch(uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Cart Data not Sent Successfully"
        }));
      }
    }

    sendCartData();
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
