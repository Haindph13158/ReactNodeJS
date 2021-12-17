
import React, { useEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { useParams } from "react-router-dom";
import { readCategory, updateCategory } from "../../api/categories";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editCategory } from "../../slice/categorySlice";


type FormValues = {
  name: string;

};



const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.name ? values : {},
      errors: !values.name
        ? {
            name: {
              type: "required",
              message: "This is required."
            }
          }
        : {}
    };
  };

const EditCategory: React.FC = () => {
    const {slug}  = useParams();
    const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm<FormValues>({ resolver });
  
    useEffect(() => {
      // sử dụng id để gửi lên API
      readCategory(slug).then((response: any) => {
        // fill nội dung vào input
        
        
        reset(response.data);
      });
    }, [slug, reset]);
    const navigate = useNavigate();
    const onSubmit = (data: any) => {
      
      // gửi dữ liệu từ form lên App.js
        dispatch(editCategory(data))
      navigate("/admin/category", { replace: true });
    };


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className="form-control" placeholder="Thêm danh mục..." {...register("name",  { required: true })} />
        {errors?.name && <p>{errors.name.message}</p>}
      
        <button className="btn btn-warning mt-5">Sửa</button>
      </form>
    </div>
  );
};

export default EditCategory;
