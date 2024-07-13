import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { counterActions } from "../store/index";
import './Counter.css'

const Counter=()=>{
    const dispatch = useDispatch();
    const counter = useSelector(state=>state.counter.counter);
    const show = useSelector(state=>state.counter.showCounter);

    const toggleCounterhandler=()=>{ 
        // dispatch({type:'toggle'}) now no need of this due to directly using counteractions
        dispatch(counterActions.toggleCounter());
    }

    const incrementHandler=()=>{
        // dispatch({type : 'IncrementBy5'})
        // dispatch({type:'IncrementBy5',amount:5}) //optimized way
        dispatch(counterActions.IncrementBy5(5));
    }
    const decrementHandler=()=>{
        // dispatch({type : 'DecrementBy5'})
        // dispatch({type:'DecrementBy5',amount:5})
        dispatch(counterActions.DecrementBy5(5));
    }
    return(
        <main>
            <h1>Redux Counter</h1>
            {show &&<div>Counter Value={counter}</div> }
            <div>
            <button onClick={incrementHandler}>IncrementBy5</button>
            <button onClick={decrementHandler}>DecrementBy5</button>
            </div>
             <button onClick={toggleCounterhandler}>Toggle Counter</button> 

        </main>
    )
}
export default Counter;