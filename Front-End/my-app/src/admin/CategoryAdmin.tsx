import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCategory } from "../api/categories";
import { Button, Pagination, Spin } from "antd";

import { ICategory } from "../model/category";
import categoriesSlice, {
  categorySate,
  deleteCategory,
  fetchCategories,
} from "../slice/categorySlice";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Column, ColumnGroup } = Table;

const CategoryAdmin: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: categorySate) => state.categories.loading
  );
  const categories = useSelector(
    (state: categorySate) => state.categories.categories
  );
  useEffect(() => {
    // Gọi đến hàm fetchProduct
    dispatch(fetchCategories());
  }, [dispatch]);
  const onDelete = (record: any) => {};

  const columns = [
    {
      title: "ID Category",
      dataIndex: "_id",
    },
    {
      title: "Tên Danh Mục",
      dataIndex: "name",
    },
    {
      title: "Action",
      render: (record: any) => {
        return (
          <>
            
            <button className="btn btn-warning">
                      <Link to={`/admin/category/edit/${record.slug}`}>Edit</Link>
           </button>
            <DeleteOutlined className="text-danger fs-4"
              onClick={() => dispatch(deleteCategory(record.slug))}
              style={{ marginLeft: 12 , }}
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
          <Link to="/admin/category/add" className="btn btn-success">
            Thêm Sản Phẩm
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID danh mục</th>
              <th scope="col">Tên danh mục</th>
              <th scope="col">Chức năng</th>
            </tr>
          </thead>
          {categories &&
            categories.map((item: ICategory, index: number) => (
              <tr key={index}>
                <th scope="col">{index + 1}</th>
                <th scope="col">{item._id}</th>
                <th scope="col">{item.name}</th>
                <td>
                  <td>
                    <button className="btn btn-warning">
                      <Link to={`/admin/category/edit/${item.slug}`}>Edit</Link>
                    </button>
                    <button className="btn btn-danger"onClick={() => dispatch(deleteCategory(item.slug))}>Xóa</button>
                  </td>
                </td>
              </tr>
            ))}
        </table>
       
      </div> */}
      <Link to="/admin/category/add" className="btn btn-success text-light mb-5">
        Thêm Sản Phẩm
      </Link>
      <Table  columns={columns} dataSource={categories}  />
      
    </div>
    
  );
};

export default CategoryAdmin;
