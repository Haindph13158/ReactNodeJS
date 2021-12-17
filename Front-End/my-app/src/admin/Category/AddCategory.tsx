import React from "react";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addCategory } from "../../slice/categorySlice";

import { Form, Input, Button, Radio } from "antd";

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
            message: "This is required.",
          },
        }
      : {},
  };
};

const AddCategory: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    dispatch(addCategory(data));
    navigate("/admin/category");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" className="form-control" placeholder="Thêm danh mục..." {...register("name", { required: true })} />
        {errors?.name && <p>{errors.name.message}</p>}
        <button className="btn btn-danger mt-5">Thêm</button>
      </form>
      
    </div>
  );
};

export default AddCategory;
