import axios from 'axios';
import * as Config from './../constants/Config'; // lấy url
// Dùng để gọi server (call API)
// Ở đây chỉ catch ra thôi .then thì phải tùy API trả về
export default function callApi(endpoint, method = 'GET', body) { //truyền vào 3 tham số url,method = 'GET' mặc định nếu không truyền j hết,data.
    return axios({ //Connect API thông qua method và url
        method: method,
        url: `${Config.API_URL}/${endpoint}`, //Lấy cái URL bên Config bỏ qua, truyền endpoint nếu có
        data: body
    }).catch(err => {
        console.log(err);
    });
}