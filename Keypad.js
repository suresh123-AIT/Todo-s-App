import React from 'react'

export default function Keypad({handleclick,calculate,handleClear}) {
  return (
    <div className='keypad'>
      <div className='row-btn'>
        <button className='digit' onClick={()=>{
          handleclick('7')
        }}>7</button>
        <button className='digit'  onClick={()=>{
          handleclick('8')
        }}>8</button>
        <button className='digit'  onClick={()=>{
          handleclick('9')
        }}>9</button>
        <button className='operator'  onClick={()=>{
          handleclick('/')
        }}>/</button>
      </div> 

      <div className='row-btn'>
        <button className='digit'  onClick={()=>{
          handleclick('4')
        }}>4</button>
        <button className='digit'  onClick={()=>{
          handleclick('5')
        }}>5</button>
        <button className='digit'  onClick={()=>{
          handleclick('6')
        }}>6</button>
        <button className='operator'  onClick={()=>{
          handleclick('*')
        }}>*</button>
      </div> 

      <div className='row-btn'>
        <button className='digit'  onClick={()=>{
          handleclick('1')
        }}>1</button>
        <button className='digit'  onClick={()=>{
          handleclick('2')
        }}>2</button>
        <button className='digit'  onClick={()=>{
          handleclick('3')
        }}>3</button>
        <button className='operator'  onClick={()=>{
          handleclick('-')
        }}>-</button>
      </div> 

      <div className='row-btn'>
        <button className='digit'  onClick={()=>{
          handleclick('0')
        }}>0</button>
        <button className='fun-key' onClick={()=>{
          calculate()
        }}>=</button>
        <button className='fun-key' onClick={()=>{
          handleClear()
        }}>c</button>
        <button className='operator'  onClick={()=>{
          handleclick('+')
        }}>+</button>
      </div>
      
    </div>
  )
}
