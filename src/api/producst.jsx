import instance from './instance'

export const getAllProducts = ()=>{
    return instance.get('/products')
}
export const getOneProduct = (id)=>{
    return instance.get('/products/'+id)
}
export const deteteProduct =(id)=>{
    return instance.delete('/products/'+id)
}
const addProduct = (product)=>{
    return instance.post('/products', product)
}
const updateProduct = (product)=>{
    return instance.put('/products/'+product.id,product)
}
export {addProduct,updateProduct}