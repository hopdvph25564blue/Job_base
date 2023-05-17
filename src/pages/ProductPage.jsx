import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
const ProductsPage = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
       props.onRemove(id)
    }
    return (
        <div>
            {
                data.map((item) => {
                    return <div key={item.id}>
                        <Link to={`/products/${item.id}`}>{<h3 >{item.name}</h3>}</Link>
                        
                        <button onClick={() => removeProduct(item.id)}>Remove</button>
                    </div>
                })
            }
        </div>
    )
}

export default ProductsPage