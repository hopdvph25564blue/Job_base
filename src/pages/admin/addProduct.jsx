import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddProduct = (props) => {
  const navigate = useNavigate()
  const [inputValue,setInputValue]=useState();
  const onHandleChange = (e)=>{
    const {name,value} = e.target
    setInputValue({...inputValue,[name]: value})
  }
  const onHandleSubmit = (e)=>{
    e.preventDefault()
    props.onAdd(inputValue)
    navigate('/admin/products')
  }
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
      <input type="text" placeholder='Product Name' onChange={onHandleChange} name='name'/>
      <input type="number" onChange={onHandleChange} name='price' />
      <button type="submit">Add new Product</button>
      </form>
    </div>
  )
}

export default AddProduct