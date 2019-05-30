import * as Types from './../constants/ActionTypes';
// Kiểm tra các action
//Tạo ra các state mặc định cho thèn product vd: name,price,quantity....
var initialState = [];
// Tìm id nằm ở index nào trong cái mảng
// Mỗi lần duyệt qua sẽ nhận được product và index
var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}
// Truyền state mặc định và action vào
const products = (state = initialState, action) => {
    var index = -1;
    var { id , product} = action; // bên action  truyền qua
    switch (action.type) {
        // case gọi action get All và trả về 1 state cho component sử dụng
        // truyền vào các product và lưu vào store
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state, id);
            // xóa 1 phần tử
            state.splice(index, 1);
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            // lấy id từ action actUpdateProduct truyền qua
            index = findIndex(state, product.id);
            state[index] = product;
            return [...state];
        default: return [...state];
    }
};
export default products;