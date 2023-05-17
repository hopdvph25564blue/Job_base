import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductManagementPage = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        props.onRemove(id)
    }
    return (
        <div>
            <button><Link to={'/admin/products/add'}>Add New Product</Link></button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/admin/products/${item.id}/update`}>Update</Link>
                                    <button onClick={() => removeProduct(item.id)}>Remove</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductManagementPage