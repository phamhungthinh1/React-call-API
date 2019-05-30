import * as Types from './../constants/ActionTypes';

var initialState = {};
// Quản lý các product by id
const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        // Lưu lên store (product)
        // product ở đây được truyền bên action
        case Types.GET_PRODUCT_BY_ID:
            return action.product;
        default:
            return state;
    }
}
export default itemEditing;