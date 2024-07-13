import {createStore} from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCouterState = {counter:0,showCounter:true}
const counterSlice = createSlice({
    name : 'counter',
    initialState : initialCouterState,
    reducers :{
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        IncrementBy5(state,action) {
            state.counter = state.counter + action.payload;
        },
        DecrementBy5(state,action) {
            state.counter = state.counter - action.payload;

        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
})
const initialAuthState = { isAuthenticated:false}
const authSlice = createSlice({
    name : 'authentication',
    initialState : initialAuthState,
    reducers:{
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})
// No Need of This due to createSlice 
// const counterReducer = (state=initialState,action)=>{
//     if(action.type === 'increment'){
//         return{
//             counter : state.counter + 1,
//         }
//     }
//     if(action.type === 'decrement'){
//         return{
//             counter : state.counter - 1,
//         }
//     }
//     if(action.type === 'IncrementBy5'){
//         return{
//             // counter : state.counter + 5,
//             counter : state.counter + action.amount, //optimized way
//             showCounter : state.showCounter,
//         }
//     }
//     if(action.type === 'DecrementBy5'){
//         return{
//             // counter : state.counter - 5,
//             counter : state.counter - action.amount,
//             showCounter : state.showCounter,
//         }
//     }
//     if(action.type === 'toggle'){
//         return{
//             showCounter : !state.showCounter,//i.e. showCounter=false
//             counter : state.counter,
//         }
//     }
//     return state;
//}
// const store = createStore(counterReducer);
const store = configureStore({
    reducer : {counter:counterSlice.reducer,auth:authSlice.reducer}}) //by this we can access all reducer methods of above

    export const counterActions = counterSlice.actions;
    export const authActions = authSlice.actions;
    export default store;