import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Iuser } from "../../../model/user";
import { signIn } from "../../../slice/authSlice";

const Signin: React.FC = () => {
  const user = useSelector((state: any) => state.auth.auth);
  
  console.log(user);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
     if (user.user) {
         if (user.user?.role===1) {
             navigate('/admin')
         } else{
             navigate('/')
         }
        
     }
      
  
  }, [user.user]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: Iuser) => {
    dispatch(signIn(data));
    toast.success("Đăng nhập thành công!");
 
  };
  return (
    <div className="container">
      {/* section-left-start */}
      <div className="container-left">
        <div className="wrapper-left">
          <div className="part-one">
            <h3>Đăng nhập</h3>
          </div>
          <div className="inp">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="email">E-mail </label>
              <i className="fas fa-envelope envelope" />
              <input
                className="inp-left"
                type="email"
                placeholder="Nhập email..."
                {...register("email")}
              />
              <label className="pass">Password </label>
              <i className="fas fa-lock pass" />
              <input
                className="inp-left"
                type="password"
                placeholder="Nhập password..."
                {...register("password")}
              />
              <div className="buttons">
                <button className="btn-one">Đăng nhập</button>
              </div>
            </form>
          </div>

          <div className="down">
            <p>Bạn chưa có tài khoản?</p>
            <Link to="/signup"> Đăng ký </Link>
          </div>
        </div>
      </div>
      {/* section-left-end */}
    </div>
  );
};

export default Signin;
