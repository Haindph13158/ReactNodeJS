import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { readCategory } from "../api/categories";
import { listCategoryProduct, readProduct } from "../api/products";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { useForm } from "react-hook-form";
import { addToCart, decreaseCart, increaseCart } from "../slice/cartSlice";

SwiperCore.use([EffectCoverflow, Pagination]);
SwiperCore.use([Autoplay])

function DetailPage() {
  const { slugProduct } = useParams();
  const dispatch = useDispatch();
  const { slugCate } = useParams();
  const [products, setProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [related, setRelated] = useState<any>([]);
  useEffect(() => {
    readCategory(slugCate).then((res: AxiosResponse) =>
      setCategories(res.data)
    );
    readProduct(slugProduct).then((res: AxiosResponse) =>
      setProducts(res.data)
    );
    // Sản phẩm liên quan
    listCategoryProduct(slugCate).then((res: AxiosResponse) => {
      const { data } = res;
      const dataFilter = data.filter((item: any) => item.slug !== slugProduct);
      setRelated(dataFilter);
    });
  }, [slugProduct]);
  const [count, setCount] = useState(1);
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const newData = {
      ...products,
      quantity: +data.quantity,
    };
    dispatch(addToCart(newData));
  };
  

  return (
    <div>
      <div className="container mt-2">
        <div className="row mt-5">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div>
              <Link to="">
                <img src={products.image} alt="" width="100%" height="100%" />
              </Link>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div>
              <Link
                to="/"
                className="text-decoration-none text-dark font-monospace "
              >
                TRANG CHỦ /
              </Link>
              <Link
                to=""
                className="text-decoration-none text-dark font-monospace "
              >
                {categories.name}
              </Link>
            </div>
            <div>
              <h2 className="font-monospace mt-2"> {products.name}</h2>
            </div>
            <div className="fs-2 text-danger">
              <span>
                {products.price}
                <strong> ₫</strong>
              </span>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="quantity mt-3">
               
                  <input type="number" {...register('quantity')} defaultValue="1"/>
                 
                  <div>
                    <button id="btn" className="btn btn-dark mt-3">
                      <i className="fas fa-shopping-cart  me-2" />
                      THÊM VÀO GIỎ HÀNG
                    </button>
                  </div>
                </div>
              </form>

              <div className="fs-5 fw-bolder mt-4">
                <span>Thanh toán</span>
                <div className="mt-2">
                  <img src="https://tapdoanxedien.com/upfiles/image/tin-tuc/danh-sach-ngan-hang.jpg" alt=""  width="80%"/>
                </div>
              </div>
              <div className="mt-1">
                <img src="./img/thanhtoan.png" alt="" />
              </div>
              <div>
                <p className="border" />

                <span className=" fs-5">Danh mục : {categories.name} </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <ul className="d-flex">
            <li>
              <a id="bosung" className=" btn btn-light text-dark bosung ">
                THÔNG TIN BỔ SUNG
              </a>
            </li>
          </ul>
        </div>
        <div className="border border-2 p-3 ">
          <div className="text-danhgia">
            <h2>{products.name}</h2>
          </div>
          <div>
            <span>{products.description}</span>
          </div>
        </div>
        <div className="mt-5">
          <div className="text-center">
            <h2 className="fw-bold">Sản phẩm liên quan</h2>
          </div>
          <div className="Slide-Swiper">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              loop={true}
              autoplay={{ delay: 5000 }}
              coverflowEffect={{
                rotate: 50,

                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              className="mySwiper"
            >
              {related &&
                related.map((item: any, index: number) => (
                  <SwiperSlide>
                    <img src={item.image} style={{ width: "30%" }} />
                    <div className="related-description">
                      <span>{item.description}</span>
                    </div>
                    <div className="text-center mt-5 feturedproduct">
                      <Link to="" className="fw-bold text-dark">
                        {item.name}
                      </Link>
                      <p className="mt-2 fw-bold"> {item.price}</p>
                      <Link
                        to=""
                        className="btn mb-4 text-light"
                        style={{ background: "#6abd45" }}
                      >
                        THÊM VÀO GIỎ HÀNG
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
