import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //thông qua thèn này lấy được các state của thèn mặc định trên store Product
// import callApi from './../../utils/ApiCaller'; // Dùng để gọi API lên mình đã tạo sẵn hàm bên /utils/ApiCaller
import { actFetchProductsRequest,actDeleteProductRequest } from './../../actions/index'; //dispath 1 action đây là action get all product thông quay mapDispatchToProps
// Lấy all sản phẩm từ ProductList và ProductItem truyền qua
class Product extends Component {
   
    //Lấy dữ liệu từ server 
    // Được gọi khi component render
    // Ở đây mình gọi API get all products
    componentDidMount() {
        this.props.fetchAllProducts();
        // // Thay vì mình gọi API ở đây thì mình gọi bên actions rồi lấy qua sử dụng dễ quản lý
        //  callApi('products', 'GET', null).then(res => { // Chỉ cần truyền url,method,data vào rồi response trả về thôi
        //      this.props.fetchAllProducts(res.data); // gọi action get products từ mapDispatchToProps lên và truyền dữ liệu từ server về
        //     // this.setState({
        // //     //     products: res.data
        // //     // })
        //  })
    }
    onDelete = (id) => {
        this.props.onDeleteProduct(id);
        // var { products } = this.state;
        // callApi(`products/${id}`, 'DELETE', null).then(res => { // gọi API delete ở đây rồi truyền props qua productItems
        //     if (res.status === 200) { // Nếu status 200 thì nó load lại mảng product
        //         var index = this.findIndex(products, id);
        //         if (index !== -1) {
        //             products.splice(index, 1); // Xóa 1 phần tử thôi
        //             this.setState({
        //                 products: products
        //             });
        //         }
        //     }
        // });
    }
   
    render() {
        var { products } = this.props; // Sau khi mapStateToProps thì dữ liệu từ store đẩy về props mình chỉ cần gọi ra
        // var { products } = this.state;    // lấy từ componentDidMount trả về
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-15 col-sm-15 col-md-15 col-lg-15">
                        <Link to="/product/add" className="btn btn-info mb-10">
                            Thêm sản phẩm
                        </Link>
                        {/* Truyền vào cho nó 1 cái props (children) */}
                        <ProductList>
                            {this.showProducts(products)}
                        </ProductList>
                    </div>
                </div>

            </div>

        );
    }
    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => { //Nhận được 1 cái product và index (props) để bên trong ProductItem nhận lại hiển thị product đó
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index} // Số thứ tự của sản phẩm
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
}
const mapStateToProps = state => { //state.products bởi vì mình combine nó thành tên là product trong appReducer
    return {
        products: state.products
    }
}
// Lấy action từ store dispatch thành props để cho component sử dụng và lưu lên store
const mapDispatchToProps = (dispatch, props) => {
    return {
        //Get All
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        // Delete
        onDeleteProduct: (id) =>{
            dispatch(actDeleteProductRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
//connect truyền vào 2 tham số 1 là mapStateToProps(lấy action và lưu lên store) và mapDispathToProps(lấy state)
