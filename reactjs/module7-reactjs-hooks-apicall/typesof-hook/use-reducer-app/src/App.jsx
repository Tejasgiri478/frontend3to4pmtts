import React,{useReducer} from 'react'
// useReducer : useReducer is an alternatives of useState hooks 
//              useReducer is typically used for complex state logic  

const reducer=(state,action)=>{

  switch(action.type)
  {
    case 'increment':return {count:state.count+1};
    case 'decrement':return {count:state.count-1};
    default:return state;
  } 

}

function Counter()
{
  const[state,dispatch]=useReducer(reducer,{count:0});

  return(
    <>
    <p>The values of count is : {state.count}</p>
    <button type='button' onClick={()=>dispatch({type:'increment'})}>+</button>
    <button type='button' onClick={()=>dispatch({type:'decrement'})}>-</button>
    </>
  )

}


export default Counter