import * as Types from './../constants/ActionTypes';
import callApi from '../utils/ApiCaller';
// Khai báo các action
// Tham so o day la cac products
// Thay vì gọi từng action bên component thì mình gọp nó ở đây bên kia chỉ việc gọi ra sử dụng
// Không gọi trực tiếp tronb component mà liên kết đến store

// Sau khi khai báo các action thì mình truyền qua reducer
// Phải có dữ liệu mới dispatch action được
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))

        });
    }
}
// Lưu products lên store
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
// Delete trên server
export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}
// Delete trong store 
export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
//Add product trên server
export const actaddProductRequest = (product) =>{
    return dispatch =>{
        return callApi(`products`, 'POST', product).then(res => {
            dispatch(addProduct(res.data))
        });
    }
}

//Add Product trong store
export const addProduct = (product) =>{
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
// Get product by id
// Gọi lên server dựa vào id lấy trên URL lấy được respone data chính là product
// Dispatch action lưu vào store
export const actGetProductRequest = (id) =>{
    return dispatch =>{
        return callApi(`products/${id}`,'GET',null).then(res =>{
            dispatch(actGetProduct(res.data));
        });
    }
}
// Lấy product ở trên store 
export const actGetProduct = (product) =>{
    return {
        type: Types.GET_PRODUCT_BY_ID,
        product
    }
}
export const actUpdateProductRequest = (product) =>{
    return dispatch =>{
        return callApi(`products/${product.id}`,'PUT',product).then(res =>{
            dispatch(actUpdateProduct(res.data));
        });
    }
}
// Update trên store
export const actUpdateProduct = (product) => {
    return{
         type: Types.UPDATE_PRODUCT,
         product
    }
}