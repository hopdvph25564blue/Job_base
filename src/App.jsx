// import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetai'
import React, { useEffect, useState } from 'react'
import { getAllProducts } from './api/producst'
import {deteteProduct} from './api/producst'
import Dashboard from './pages/admin/Dashboard'
import { addProduct, updateProduct } from './api/producst'
import ProductManagement from './pages/admin/ProductManagement'
import AddProduct from './pages/admin/addProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
function App() {

  const [products, setProduct] = useState([])
  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then((response) => response.json())
    //   .then(data => setProduct(data))
    getAllProducts().then(({data}) => setProduct(data))
  }, [])


  const onHandleRemove = (id) => {
    // fetch('http://localhost:3000/products/' + id, {
    //     method: 'DELETE'
    // })
    deteteProduct(id).then(() => setProduct(products.filter((item) => item.id !== id)))
  }

  const onHandleAdd =(product)=>{
    addProduct(product).then(() =>setProduct([...products,product]))
  }
  const onHandleUpdate =(product) => {

    updateProduct(product).then(() => setProduct(products.map((item) => item.id == product.id ? product : item)))
  }
  return (
    <div className="App">


      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/products' element={<ProductManagement products={products} onRemove={onHandleRemove} />} />
        <Route path='/admin/products/add' element={<AddProduct onAdd={onHandleAdd} />} />
        <Route path='/admin/products/:id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
      </Routes>


    </div>
  )
}

export default App