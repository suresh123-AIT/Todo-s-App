import React, { useEffect, useState } from 'react'
import ApiCard from './ApiCard';
import '../App.css'

export default function ApiList() {
    let[products,updateproducts]=useState([])
    useEffect(()=>{
        getproducts();
    },[])
    if(products.length ===0){
        return (<h1 style={{color:'orange'}}>fetching data...</h1>)
    }
    async function getproducts(){
        let data=await fetch('https://fakestoreapi.com/products');
        let productdata=await data.json();
        updateproducts(productdata)
        
    }
   
  return (
    <div className='productlist'> 
        {
            products.map((p)=><ApiCard {...p} key={p.id}/>)
            
        }
      
    </div>
  )
}
