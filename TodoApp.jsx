import React, { useState } from 'react'


let nextid=4;
export default function TodoApp() { 
  let [todoInput,updateInput]=useState()
 let[todoList,updateTodos]= useState([
    {
      id:1,
      task:'Learn Html&Css'
    },
    {
      id:2,
      task:'Learn Javascript'
    },
    {
      id:3,
      task:'Learn React'
    }
  ])
  
  const addNewTodo=()=>{
    if(todoInput === ""){
      alert('Enter task')
    } else{
      let newtodolist=[
        ...todoList,
        {
          id:nextid++,
          task:todoInput
        }
      ] 
      updateTodos(newtodolist)
      console.log(newtodolist)
      updateInput("")
    }
  }
  function deletetodo(id){
    let newupdatedtodos=todoList.filter((todo)=>{ 
      return (todo.id!==id) 
      
        

    }) 
    updateTodos(newupdatedtodos)
   
   
  }
  
  return (
    <div className='container'>
        <h3 style={{color:'maroon'}}>Todo App using React</h3>
      <div className='input-group'>
        <input type='text' className='form-control' onChange={(e)=>{ 
          let task1=e.target.value;
          updateInput(task1)


        }} value={todoInput}/> 
        <button className='btn btn-primary mx-2' onClick={()=>{
                  addNewTodo()
                }}>Add</button>
      </div> 
      <ul className='list-group mt-3'>
       {
        
        todoList.map(
          (todo)=>{
            return (
              <li className='list-group-item my-1' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <p>{todo.task}</p>
                <button className='btn' onClick={()=>{
                  deletetodo(todo.id)
                }} >❌</button>
              </li>
            )
          }
        )
       }
      </ul>
    </div>
  )
}
