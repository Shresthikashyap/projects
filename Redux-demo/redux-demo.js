const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'IncrementBy2':
            return {
                counter: state.counter + 2
            };
        case 'DecrementBy2':
            return {
                counter: state.counter - 2
            };
        default:
            return state;
    }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'IncrementBy2' });
store.dispatch({ type: 'IncrementBy2' });
store.dispatch({ type: 'IncrementBy2' });
store.dispatch({ type: 'IncrementBy2' });
store.dispatch({ type: 'DecrementBy2' });
store.dispatch({ type: 'DecrementBy2' });
