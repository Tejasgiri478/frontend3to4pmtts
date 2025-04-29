// import { legacy_createStore } from "redux"
import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './fetaures/todos/todoSlice'


// counter app
// const initialState= {
//  count: 0
// };

// const reducer=(state=initialState,action)=>{

//  switch(action.type) 
//  {
//   case 'INCREMENT':
//    return{
//    ...state,
//    count:state.count + 1
//    };
   
//    case 'DECREMENT':
//    return{
//    ...state,
//    count:state.count - 1
   
//    };

//   default:
//   return state
 
//  }

// }

// for to do list 
export const store=configureStore({
    reducer :{
        todos:todosReducer,
    }
})

// const store=legacy_createStore(reducer);
export default store
