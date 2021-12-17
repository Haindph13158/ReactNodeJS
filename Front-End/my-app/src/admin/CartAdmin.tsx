import { AxiosResponse } from "axios";
import CartPrice from "../component/Price";
import { useEffect, useState } from "react";

import { listCart } from "../api/cartAPI";






const CartAdmin: React.FC = () => {
  
      

  const [cart, setCart] = useState<any>([]);
  useEffect(() => {
    listCart({}).then((response: AxiosResponse) => setCart(response.data));
   
  }, []);
  
  
  
  

  
  
  return (
    <div>
      <div className="container-fuild">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Giỏ Hàng</h1>
          
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Mã thanh toán</th>
              <th scope="col">Email</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá tiền</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Ngày mua hàng</th>
            
            </tr>
          </thead>
          {cart &&
            cart.map((item: any, index: number) => (
              <tr key={index}>
                <th scope="col">{index + 1}</th>
                <th scope="col">{item._id}</th>
                <th scope="col">{item.user.email}</th>
                <th scope="col"> {item.listOrder.map((test : any )=>(
                <th scope="col" className="d-flex">{test.product  ? test.product.name  : ""}</th>
                ))}</th>
                 <th scope="col"> {item.listOrder.map((test2 : any )=>(
                <th scope="col" className="d-flex">{test2.product  ? test2.product.price : ""}</th>
                ))}</th>
                 <th scope="col"> {item.listOrder.map((test3 : any )=>(
                <th scope="col" className="d-flex">{test3.product  ? test3.quantity : ""}</th>
                ))}</th>
                 <th scope="col"> {item.listOrder.map((test4 : any )=>(
                <th scope="col" className="d-flex">{test4.product  ? Number(test4.quantity * test4.product.price) : ""}</th>
                ))}</th>
                 <th scope="col">{item.createdAt}</th>
               
              
               
                
               
                
               
               
              </tr>
            ))}
        </table>
        {/* Content Row */}
      </div>
    </div>
  );
};

export default CartAdmin;
