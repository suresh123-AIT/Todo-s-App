import React, { useState } from 'react' 


export default function CounterApp() {
    let[counter,setCounter]=useState(0)
    let stalk=10;
  return (
    <>
    <h2 style={{color:'gold'}}> Counter</h2>
    <div className='Wrapper2'>
      <button className='minus' disabled={counter === 0} onClick={()=>{
        if(counter>0){
            setCounter(counter-1)
        }
      }}>-</button> 
      <p>{counter}</p>
      <button className='plus' disabled={counter === stalk} onClick={()=>{
        if(counter<stalk){
            setCounter(counter+1)
        }
      }}>+</button>
    </div>
    </>
  )
}
