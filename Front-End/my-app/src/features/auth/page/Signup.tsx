import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signin, signup } from '../../../api/authAPI';
import { Iuser } from '../../../model/user';
import { signUp } from '../../../slice/authSlice';



const Signup: React.FC = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = (data : Iuser) => {
        dispatch(signUp(data));
        toast.success("Đăng ký thành công");
    }
    return (

        <div className="container">
            {/* section-left-start */}
            <div className="container-left">
                <div className="wrapper-left">
                    <div className="part-one">
                        <h3>Đăng ký</h3>
                        <p>Hãy tạo tài khoản cho bạn.</p>
                    </div>
                    <div className="inp">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <label className="email">E-mail </label>
                            <i className="fas fa-envelope envelope" />
                            <input className="inp-left" type="email" placeholder="Nhập email..." {...register("email")} />
                            <label className="pass">Password </label>
                            <i className="fas fa-lock pass" />
                            <input className="inp-left" type="password" placeholder="Nhập password..."{...register("password")} />
                            <div className="buttons">
                                <button className="btn-one">Đăng ký</button>
                            </div>
                        </form>
                    </div>

                    <div className="down">
                        <p>Bạn đã có tài khoản?</p>
                        <Link to="/signin"> Đăng nhập </Link>
                    </div>
                </div>
            </div>
            {/* section-left-end */}
        </div>
    )
}

export default Signup;


