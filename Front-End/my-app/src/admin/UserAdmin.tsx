import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, usersState } from "../slice/userSlice";
import { Table } from "antd";
const UserAdmin: React.FC = () => {
  const dispatch = useDispatch();
  
  const user = useSelector(
    (state: usersState) => state.users.users
  );
  useEffect(() => {
    // Gọi đến hàm fetchProduct
    dispatch(fetchUser());
  }, [dispatch]);
  const columns = [
    {
      title: "ID User",
      dataIndex: "_id",
    },
    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      render: (record: any) => {
        return (
          <>
            
           
          </>
        );
      },
    },
  ];
  return  (
    <div>
      {/* <div className="container-fuild">
      
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Bảng User</h1>
          
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID user</th>
              <th scope="col">Tên Người Dùng</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {user &&
            user.map((item: any, index: number) => (
              <tr key={index}>
                <th scope="col">{index + 1}</th>
                <th scope="col">{item._id}</th>
                <th scope="col">{item.name}</th>
                <th scope="col">{item.email}</th>
                <td>
                  
                </td>
              </tr>
            ))}
        </table>
       
      </div> */}
       <Table  columns={columns} dataSource={user}  />
    </div>
  );
};

export default UserAdmin;
