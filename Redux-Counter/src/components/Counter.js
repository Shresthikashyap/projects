import { useDispatch, useSelector} from 'react-redux';
import classes from './Counter.module.css';


const Counter = () => {
  
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={(e)=>{dispatch({type:'INCREMENT'})}}>Increment</button>
        <button onClick={(e)=>{dispatch({type:'DECREMENT'})}}>Decrement</button>      
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
