import React, { useState } from 'react'

export default function Binding() { 
    let[num,updateNum]=useState(100)
    
  return (
    <div> 
      <h2>{num}</h2>
      <button className='btn btn-primary'onClick={()=>{
        let num2=200;
        updateNum(num2)
      }}>click</button><br></br>
      <input type='text' value={num} onChange={(e)=>{
        let temp=e.target.value;
        updateNum(temp)
      }} className='my-2'/>
    </div>
  )
}
