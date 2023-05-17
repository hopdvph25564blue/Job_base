import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { getOneProduct } from '../api/producst';
const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        // fetch('http://localhost:3000/products/' + id)
        //     .then(response => response.json())
        //     .then(data => setProduct(data))
        getOneProduct(id).then(({data}) => setProduct(data))
    },[id])
    return (
        <div>
         
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
        </div>
    )
}

export default ProductDetail