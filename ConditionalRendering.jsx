import React from 'react'
import '../App.css' 

let isLoggedin=false; 
// let IsAdmin=true;


export default function ConditionalRendering() { 

  
  return (
    <div> 
      <ul>
        <li>Home</li>
        <li>About</li> 
        <li>contact</li>
        {
        isLoggedin?( <li>Logot</li> ) : ( <li>Login</li> )
       }
      
      </ul>
      
    </div>
  )
} 

  
