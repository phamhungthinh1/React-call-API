import React, { Component } from 'react';
//Gọi ProductItem truyền vào tbody
class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                    <table className="table  table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Ảnh</th>
                                <th>Loại Thức Ăn</th>
                                <th>Giá</th>
                                <th>Mô tả</th>
                                <th>Số lượng</th>
                                <th>Trạng thái</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* Gọi ProductItem thông qua thèn Product truyền qua các props children */}
                        {this.props.children}
                        </tbody>
                    </table>

                </div>
            </div>

        );
    }
}

export default ProductList;
