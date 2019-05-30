import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// Chứa các item trong product
class ProductItem extends Component {
    // Trước khi xóa thì đưa ra confirm hỏi có muốn xóa k
    // Xử lý ngoài product rồi truyền props vào đây
    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { // eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        // Gọi thèn props ra và đặt các tên biến
        var { product, index } = this.props;
        var statusName = product.status ? 'Sẵn Sàng' : 'Hết Món';
        var statusClass = product.status ? 'warning' : 'default'
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.image}</td>
                <td>{product.type}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.quantity}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    {/* Chuyển qua trang productActionPage để edit  */}
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-10"

                    >
                        Sửa
                    </Link>
                    {/* Delete thì phải truyền id vào */}
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>

        );
    }
}

export default ProductItem;
