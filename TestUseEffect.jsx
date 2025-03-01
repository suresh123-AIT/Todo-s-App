import React, { useEffect, useState } from 'react'

export default function TestUseEffect() {
    let[timer,settimer]=useState(0)
    let[counter,updatecounter]=useState(0)
    useEffect(()=>{
        console.log('inside use effect')
    })

   
  return (
    <div>
      <h2>Timer:{timer}</h2>
      <h2>counter:{counter}</h2>
      {console.log('inside component')} 
      <button  onClick={()=>{
        settimer(timer+1)
      }}>update Timer</button> 

<button  onClick={()=>{
        updatecounter(counter+1)
      }}>update counter</button>
    </div>
  )
}
