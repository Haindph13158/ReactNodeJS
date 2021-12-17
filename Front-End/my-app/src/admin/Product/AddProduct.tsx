import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listCategory } from "../../api/categories";

import { ICategory } from "../../model/category";
import { addProduct } from "../../slice/productSlice";



type FormValues = {

  name: string;
  image: string;
  price: string;
  description: string,
  category: any

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

const AddProduct: React.FC = () => {
  const [image, setImage] = useState<any>('');
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    listCategory().then((response: AxiosResponse) => setCategories(response.data))
  }, []);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver });
  const navigate = useNavigate();



  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    const data1 = new FormData();
    data1.append("file", image);
    data1.append("upload_preset", "hdkrgg3k");
    data1.append("cloud_name", "dvqnyjmr8");
    fetch("https://api.cloudinary.com/v1_1/dvqnyjmr8/image/upload", {
      method: "POST",
      body: data1
    })
      .then((res) => res.json())
      .then((res) => {
        data.image = res.url;
        
        dispatch(addProduct(data))
    navigate("/admin/product", { replace: true });
      })
      .catch((err) => console.log(err));


  
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select className="form-select" aria-label="Default select example" {...register("category", { required: true })}>
          <option selected>Chọn Danh Mục</option>
          {categories && categories.map((item: ICategory) => {

            return (
              <option key={item._id} value={item._id} >{item.name}</option>
           
            );
          })}
        </select>
        
        <input type="text" className="form-control mt-5" placeholder="Thêm tên sản phẩm..." {...register("name", { required: true })} />
        {errors?.name && <p>{errors.name.message}</p>}
        <input
          type="file" {...register("image", { required: true })} className="form-control mt-5" onChange={(e) => setImage(e.target.files && e.target.files[0])} ></input>
        {errors?.image && <p>{errors.image.message}</p>}



        <input type="number" className="form-control mt-5" placeholder="Thêm giá sản phẩm..." {...register("price", { required: true })} />
        {errors?.price && <p>{errors.price.message}</p>}
        <input type="text" className="form-control mt-5" placeholder="Mô tả sản phẩm sản phẩm..." {...register("description", { required: true })} />
        {errors?.description && <p>{errors.description.message}</p>}

        <button className="btn btn-warning mt-5">Thêm Sản Phẩm</button>

      </form>



    </div>
  );
};

export default AddProduct;
