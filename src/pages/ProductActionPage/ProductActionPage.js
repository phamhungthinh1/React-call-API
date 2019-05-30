import React, { Component } from 'react';
// import callApi from './../../utils/ApiCaller';
import { Link } from 'react-router-dom';
import { actaddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';
// Tạo ra form để thực hiện Add và Edit
// Đầu tiên phải đặt name cho các input
// Tạo state tương ứng với name
// Khi thao tác với Form lưu ý là: value vs onChange
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtImage: '',
            txtType: '',
            txtPrice: '',
            txtDescription: '',
            txtQuantity: '',
            chkbStatus: ''
        }
    }
    // Lấy id trên server về để edit
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id; //lấy id từ server đổ về
            this.props.onGetByIdProduct(id);
            //Get product by id
            // set State lại cho nó
            // callApi(`/products/${id}`, 'GET', null).then(res => {
            //     var data = res.data;
            //     console.log(data);
            //     this.setState({
            //         id: data.id,
            //         txtName: data.name,
            //         txtImage: data.image,
            //         txtType: data.type,
            //         txtPrice: data.price,
            //         txtDescription: data.description,
            //         txtQuantity: data.quantity,
            //         chkbStatus: data.status
            //     });
            // });
        }
    }
    componentWillReceiveProps(nextProps) {
        //Kiểm tra nếu có tồn tại thì setSate lại
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtImage: itemEditing.image,
                txtType: itemEditing.type,
                txtPrice: itemEditing.price,
                txtDescription: itemEditing.description,
                txtQuantity: itemEditing.quantity,
                chkbStatus: itemEditing.status
            });
        }
    }
    //Lấy name và value của input
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    //Lấy dữ liệu trên form
    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtImage, txtType, txtPrice, txtDescription, txtQuantity, chkbStatus } = this.state;
        var { history } = this.props; // Lấy từ routes của product/add để quay về trang cũ
        // Truyền product vào onAddProduct
        var product = {
            id: id,
            name: txtName,
            image: txtImage,
            type: txtType,
            price: txtPrice,
            description: txtDescription,
            quantity: txtQuantity,
            status: chkbStatus
        }
        //Kiểm tra nếu tồn tại id trả về thì update ngược lại thì add
        if (id) { //update
            this.props.onUpdateProduct(product);
            // // HTTP Method : PUT
            // //Body: thì phải gửi lên nếu k có body thì nó sẽ lấy dữ liệu trước đó
            // callApi(`products/${id}`, 'PUT', {
            //     name: txtName,
            //     image: txtImage,
            //     type: txtType,
            //     price: txtPrice,
            //     description: txtDescription,
            //     quantity: txtQuantity,
            //     status: chkbStatus
            // }).then(res => {
            //     history.goBack();
            // });
        } else { // thêm mới
            this.props.onAddProduct(product);
            // callApi('products', 'POST', { //truyền dữ liệu từ state vào body
            //     name: txtName,
            //     image: txtImage,
            //     type: txtType,
            //     price: txtPrice,
            //     description: txtDescription,
            //     quantity: txtQuantity,
            //     status: chkbStatus
            // }).then(res => {
            //     history.goBack(); // goBack() trở lại trang trước đó
            // });
        }
        history.goBack(); // goBack() trở lại trang trước đó


    }
    render() {
        var { txtName, txtImage, txtType, txtPrice, txtDescription, txtQuantity, chkbStatus } = this.state; // tạo các biến lấy từ state
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ml-300">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Tên Sản Phẩm: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Ảnh: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtImage"
                            value={txtImage}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Loại Thức Ăn: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtType"
                            value={txtType}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Giá Sản Phẩm: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Mô Tả: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtDescription"
                            value={txtDescription}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Số Lượng: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtQuantity"
                            value={txtQuantity}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Trạng thái: </label>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                                //checked này để khi bấm vào edit thì nó tick vào
                                checked={chkbStatus}
                            />
                            Còn Hàng
                        </label>
                    </div>
                    <Link to="/product" className="btn btn-danger mr-10">
                        Trở lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>

            </div>
        );
    }
}
// Lấy cái itemEditing từ store 
// Đây là cái props
// Chuyển state trên store thành props cho component này
const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapDishpatchToProps = (dispatch, props) => {
    return {
        // Add product
        onAddProduct: (product) => {
            dispatch(actaddProductRequest(product));
        },
        // Get by id product
        onGetByIdProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        // Update product
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps, mapDishpatchToProps)(ProductActionPage);
