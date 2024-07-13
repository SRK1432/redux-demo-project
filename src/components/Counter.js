import React from "react";
import { useSelector,useDispatch } from "react-redux";

const Counter=()=>{
    const counter = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    const toggleCounterhandler=()=>{ }
    const incrementHandler=()=>{
        dispatch({type : 'IncrementBy5'})
    }
    const decrementHandler=()=>{
        dispatch({type : 'DecrementBy5'})
    }
    return(
        <main>
            <h1>Redux Counter</h1>
            <div>--Counter Value--{counter}</div>
            <button onClick={toggleCounterhandler}>Toggle Counter</button> 
            <button onClick={incrementHandler}>IncrementBy5</button>
            <button onClick={decrementHandler}>DecrementBy5</button>

        </main>
    )
}
export default Counter;