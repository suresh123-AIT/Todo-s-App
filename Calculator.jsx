import React, { useState } from 'react'
import Keypad from './Keypad'
import './Calculator.css'

export default function Calculator() { 
  let[input,setInput]=useState('')
 let handleclick=(value)=>{
    setInput(input+value)
  }

  let calculate=(value)=>{
    let outputValue=eval(input)
    setInput(outputValue)
  } 

  let handleClear=()=>{
    setInput('')
  }
  return (
    <div className='container calc'> 
    <h3 className='heading'>Calculator App Using React</h3>
      <div className='calculator'>
        <input type='text' className='outputdisplay' value={input}/> 
        <Keypad handleclick={handleclick} calculate={calculate} handleClear={handleClear}/>

      </div>
    </div>
  )
}


