import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addCart } from "../slice/addCart";
import { removeAllCart, removeCart } from "../slice/cartSlice";
import { decreaseCart, increaseCart } from "../slice/cartSlice";
import CartPrice from "./Price";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.products);
  let user = useSelector((state: any) =>   state.auth.auth.user?._id  ); 
  const handleSubmit = () => {
    const carts: { product: any; quantity: any }[] = [];
    cart.forEach((item: any) => {
      carts.push({
        product: item._id,
        quantity: item.quantity,
      });
    });
    dispatch(
      addCart({
        user: user,
        listOrder: carts,
      })
    );
    toast.success("Đặt hàng thành công");
    dispatch(removeAllCart({}));
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="back">
          <Link to="/"> ⮪ shop</Link>
        </div>
        <h1>Giỏ hàng của bạn</h1>

        <div className="container-fluid">
          <div className="row align-items-start">
            <div className="col-12 col-sm-8 items">
              {/*1*/}
              {cart.map((item: any, index: number) => (
                <div className="cartItem row align-items-start">
                  <div className="col-3 mb-2">
                    <img className="w-100" src={item.image} alt="art image" />
                  </div>
                  <div className="col-4 mb-2">
                    <h3>{item.name}</h3>
                    <p className="pl-1 mb-0 text-danger">{item.price} đ</p>
                    <p className="pl-1 mb-0 mt-2">Mã SP : {item._id}</p>
                  </div>
                  <div className="col-2  ">
                    <div className="d-flex">
                      <button
                        type="button"
                        className="btn btn-danger minus dis"
                        onClick={() => dispatch(decreaseCart(item.slug))}
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        width="10px"
                        value={item.quantity}
                      />
                      <button
                        type="button"
                        className="btn btn-success plus"
                        onClick={() => dispatch(increaseCart(item.slug))}
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                  </div>

                  <div className="col-1 ms-5 ">
                    <p id="cartItem1Price">{item.price}đ</p>
                    <p className="text-right">X {item.quantity}</p>
                    <p className="">={Number(item.quantity * item.price)}đ</p>
                  </div>
                  <div className="col-1 ms-3">
                    <button
                      className="btn text-danger"
                      onClick={() => dispatch(removeCart(item.slug))}
                    >
                      X
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-12 col-sm-4 p-3 proceed form">
              <div className="row mx-0 mb-2">
                <div className="col-sm-8 p-0 d-inline">
                  <h5>Total: </h5>
                </div>
                <div className="col-sm-2 p-0">
                  <CartPrice />
                </div>
              </div>

              <button
                id="btn-checkout"
                className="shopnow"
                onClick={handleSubmit}
              >
                <span>Checkout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
