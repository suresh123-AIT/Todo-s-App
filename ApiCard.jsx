import React from 'react'

export default function ApiCard({title,image,price,rating}) {
  return (
    <div className='card'>
        <img src={image} alt={title}/>
        <h4>{title}</h4>
        <p>${price}</p>  
    </div>
  )
}
