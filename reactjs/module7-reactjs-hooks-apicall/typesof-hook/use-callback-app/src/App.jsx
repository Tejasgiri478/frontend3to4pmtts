import React,{useState,useCallback} from "react";
// Memoizes functions to prevent unessessary re-creations
function Button({onClick}){

return  <button onClick={onClick}>Click Me</button>;


}

function Parent()
{
  const[count,setCount]=useState(0);
  
  const handelClick=useCallback(()=>{
  
    setCount(c=>c+1);
  
  },[]);

  return (
    <>
        <p>{count}</p>
        
      <Button onClick={handelClick} />
    </>
  )
}

export default Parent