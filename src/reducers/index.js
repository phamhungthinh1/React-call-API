import {combineReducers} from 'redux';
import products from './products';
import itemEditing from './itemEditing';
//Khi sử dụng combineReducers, có thể sử dụng multiple reducer mỗi reducer sẽ trả về một substate.
//Sau khi tạo state mặc định cho Product thì gọi qua đây truyền vào appReducers
//Tạo Store
const appReducers= combineReducers({ //Truyền state vào đây
   products,
   itemEditing
});
export default appReducers;