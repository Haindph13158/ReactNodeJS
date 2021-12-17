import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProduct,
  fetchProducts,
  productState,
} from "../slice/productSlice";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Image } from 'antd';
const ProductAdmin: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: productState) => state.products.loading);
  const products = useSelector(
    (state: productState) => state.products.products
  );
  useEffect(() => {
    // Gọi đến hàm fetchProduct
    dispatch(fetchProducts());
  }, [dispatch]);
  const columns = [
    {
      title: "ID Sản phẩm",
      render: (test: any) => {
        return (
          <>
             {test.category._id}
          </>
        );
      }
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      title: "Giá",
      dataIndex: "price",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Ảnh",
      render: (img: any) => {
        return (
          <>
           
             <img src={img.image} alt="" width="50%"/>
           
          </>
        );
      },
    },
    {
      title: "Action",
      render: (record: any) => {
        return (
          <>
            <button className="btn btn-warning mb-4">
              <Link to={`/admin/product/edit/${record.slug}`}>Edit</Link>
            </button>
            <DeleteOutlined
              className="text-danger fs-4"
              onClick={() => dispatch(deleteProduct(record.slug))}
              style={{ marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {/* <div className="container-fuild">
    
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Bảng Sản Phẩm</h1>
          <Link to="add" className="btn btn-success">
            Thêm Sản Phẩm
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID danh mục</th>
              <th scope="col">Tên Sản Phẩm</th>
              <th scope="col">PRICE</th>
              <th scope="col">DESCRIPTION</th>
              <th scope="col">IMG</th>
              <th scope="col">Chức năng</th>
            </tr>
          </thead>
          {products &&
            products.map((item: any, index: number) => (
              <tr key={index}>
                <th scope="col">{index + 1}</th>
                <th scope="col">{item.category.name}</th>
                <th scope="col">{item.name}</th>
                <th scope="col">{item.price}</th>
                <th scope="col-3" className="des">{item.description}</th>
               <th scope="col"> <img src={item.image} alt="" width="40%" /></th>
                <td>
                  <button className="btn btn-warning">
                    <Link to={`/admin/product/edit/${item.slug}`}>Edit</Link>
                  </button>
                  <button className="btn btn-danger"onClick={() => dispatch(deleteProduct(item.slug))} >Xóa</button>
                </td>
              </tr>
            ))}
        </table>
     
      </div> */}
      <Link to="add" className="btn btn-success text-light mb-5">
        Thêm Sản Phẩm
      </Link>
     
      <Table columns={columns} dataSource={products}/> 
     
    </div>
  );
};

export default ProductAdmin;
