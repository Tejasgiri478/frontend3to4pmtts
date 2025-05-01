import React,{useMemo,useState} from "react";
// useMemo will only recompute the memoized value when one of the deps has changed.
//or
//useMemo is memoized expensive computations

function ExpensiveComponent({number})
{
  //const[number,setNumber]=useState(3);
  var number=3;
  const squared=useMemo(()=>{
  console.log('computing square...');
  return number*number;
  },[number]);

  return <p>The sqaure of numbers is :{squared}</p>
}

export default ExpensiveComponent


