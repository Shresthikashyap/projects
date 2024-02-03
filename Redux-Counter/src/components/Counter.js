import { useDispatch, useSelector} from 'react-redux';
import { counterActions } from './store';
import classes from './Counter.module.css';


const Counter = () => {
  
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  //const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={(e)=>{dispatch(counterActions.increment())}}>Increment</button>
        <button onClick={(e)=>{dispatch(counterActions.increase(2))}}>IncrementBy2</button>
        <button onClick={(e)=>{dispatch(counterActions.decrement())}}>Decrement</button>      
      </div>

      <button onClick={() => dispatch(counterActions.toggleCounter())}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
