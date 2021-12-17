import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { useParams } from "react-router-dom";
import { listCategory } from "../../api/categories";
import { useNavigate } from "react-router-dom";
import { readProduct } from "../../api/products";
import { ICategory } from "../../model/category";
import { useDispatch } from "react-redux";
import { editProduct } from "../../slice/productSlice";

type FormValues = {
  name: string;
  price: string;
  description: string;
  category: any;
  image: string;
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

const EditProduct: React.FC = () => {
  const [image, setImage] = useState<any>("");

  const [categories, setCategories] = useState<any>([]);
  useEffect(() => {
    listCategory().then((response: AxiosResponse) =>
      setCategories(response.data)
    );
  }, []);
  const { slug } = useParams();

  const { register, handleSubmit,reset } = useForm<FormValues>({ resolver });
  useEffect(() => {
    // sử dụng id để gửi lên API
    readProduct(slug).then((response: AxiosResponse) => {
      // fill nội dung vào input
      const data = response.data
      data.image = null;
      reset(data)
    });
  }, [slug,reset]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    const data1 = new FormData();
    data1.append("file", image);
    data1.append("upload_preset", "hdkrgg3k");
    data1.append("cloud_name", "dvqnyjmr8");
    fetch("https://api.cloudinary.com/v1_1/dvqnyjmr8/image/upload", {
      method: "POST",
      body: data1,
    })
      .then((res) => res.json())
      .then((res) => {
        data.image = res.url;
      dispatch(editProduct(data));
      navigate("/admin/product", { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select className="form-select" aria-label="Default select example">
          <option selected>Chọn Danh Mục</option>
          {categories &&
            categories.map((item: ICategory, index: any) => {
              return (
                <option
                  value={item._id}
                  {...register("category", { required: true })}
                >
                  {item.name}
                </option>
              );
            })}
        </select>
        <input
          type="text"
          className="form-control mt-5"
          placeholder="Thêm tên sản phẩm..."
          {...register("name", { required: true })}
        />
        <input
          type="file"
          {...register("image", { required: true })}
          className="form-control mt-5"
          onChange={(e) => setImage(e.target.files && e.target.files[0])}
        ></input>

        <input
          type="number"
          className="form-control mt-5"
          placeholder="Thêm giá sản phẩm..."
          {...register("price")}
        />
        <input
          type="text"
          className="form-control mt-5"
          placeholder="Mô tả sản phẩm sản phẩm..."
          {...register("description")}
        />
        <button className="btn btn-warning mt-5">Sửa Sản Phẩm</button>
      </form>
    </div>
  );
};

export default EditProduct;
