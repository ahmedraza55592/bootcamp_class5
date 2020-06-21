import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const ReducerChild = () => {

    let [state, dispatch] = useReducer(counterReducer, 0);
    return (
        <div>
            <h3>This is the second child using reducer</h3>
            <h3>Value of Reducer is {state}</h3>
            <button onClick={()=> {dispatch('INCREMENT')}}>Increment Reducer</button>
        </div>
    )
}

export default ReducerChild;