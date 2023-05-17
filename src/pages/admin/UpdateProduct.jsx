import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const UpdateProductPage = (props) => {
    const navigate = useNavigate()
    const { id } = useParams() // lấy id từ url
    const [product, setProduct] = useState({}) // khởi tạo state mới để lưu trữ sản phẩm cần update
    useEffect(() => {
        const currentProduct = props.products.find((item) => item.id == id)// tìm sản phẩm cần update
        setProduct(currentProduct) // cập nhật lại state
    }, [props]) // khi props thay đổi thì useEffect sẽ chạy lại

    const [inputValue, setInputValue] = useState({}) // khởi tạo state mới để lưu trữ giá trị input
    const onHandleChange = (e) => { // hàm xử lý khi input thay đổi
        const { name, value } = e.target // lấy name và value của input
        setInputValue({ ...inputValue, [name]: value }) // cập nhật lại state
    }
    const onHandleSubmit = (e) => { // hàm xử lý khi submit form
        e.preventDefault() // ngăn chặn reload trang
        props.onUpdate({ ...product, ...inputValue }) // gọi hàm onUpdate từ props và truyền vào sản phẩm cần update
        navigate('/admin/products')
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" name='name' defaultValue={product?.name} onChange={onHandleChange} />
                <input type="number" name='price' defaultValue={product?.price} onChange={onHandleChange} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateProductPage