import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { AxiosResponse } from "axios";
import { list } from "../api/products";

import { ICategory } from "../model/category";

import 'swiper/swiper-bundle.css';


// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);
SwiperCore.use([Autoplay])
function Product() {
  const [products, setProducts] = useState<ICategory[]>([]);
  useEffect(() => {
    list().then((response: AxiosResponse) => setProducts(response.data));
  }, []);

  const haisan = products.filter(
    (item: any) => item.category.slug === "hai-san"
  );
  const raucu = products.filter(
    (item: any) => item.category.slug === 'rau-cu'
  );
  console.log(raucu);
  

  return (
    <div>
      <div className="container-fuild">
        <div>
          <div className="banner">
            <img
              src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637579544/bnNnMnI0cm96YmFscDR5ODNmcW4=/preview"
              alt=""
            />
          </div>
          <div className="banner-content text-center">
            <span className="text-white ">
              TÌM MUA{" "}
              <span className="text-white" id="span2">
                THỰC PHẨM SẠCH
              </span>{" "}
              <span className="text-white">TỪ</span>
            </span>
            <div className="mt-3">
              <span className="text-white ">
                CHỈ CÓ TẠI{" "}
                <span className="text-white" id="span2">
                  SEA FOOD+
                </span>{" "}
              </span>
            </div>
            <div className="mt-5 btn">
              <button className="btn btn-success">MUA NGAY</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="title mt-5 text-center">
          <h2 className="fw-bold">Mua sản phẩm được chọn từ vườn</h2>
        </div>
        <div className="d-flex menu-navbar justify-content-between mt-5">
          <div>
            <div className="test">
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637553260/bm1wdHlrbXBqNWxkZW44cnlwZWk=/preview"
                alt=""
              />
            </div>
            <div className="mt-3 ps-5 title-a">
              <Link to="" className="fw-bold text-center text-dark">
                Rau Củ
              </Link>
            </div>
          </div>
          <div>
            <div className="test">
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637580613/bW1sdGFlaGhiZnZ0NDlkZWJkbm8=/preview"
                alt=""
              />
            </div>
            <div className="mt-3 ps-5 title-a">
              <Link to="" className="fw-bold text-center text-dark">
                Hải Sản
              </Link>
            </div>
          </div>
          <div>
            <div className="test">
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637580647/ZnFxdmV5bmQ5ZDJrMmt1MGduZHA=/preview"
                alt=""
              />
            </div>
            <div className="mt-3 ps-5 title-a">
              <Link to="" className="fw-bold text-center text-dark">
                Thịt Trứng
              </Link>
            </div>
          </div>
          <div>
            <div className="test">
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1638154951/aW5kZXhfY2F0ZV80X2hvdmVyX25jdGhzcw==/preview"
                alt=""
              />
            </div>
            <div className="mt-3 ps-5 title-a">
              <Link to="" className="fw-bold text-center text-dark">
                Hoa Quả
              </Link>
            </div>
          </div>
          <div>
            <div className="test">
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1638154952/aW5kZXhfY2F0ZV82X2hvdmVyX2F6c2ZmNQ==/preview"
                alt=""
              />
            </div>
            <div className="mt-3 ps-5 title-a">
              <Link to="" className="fw-bold text-center text-dark">
                Đồ Uống
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="text-center">
          <h2 className="fw-bold">Chương trình khuyến mãi</h2>
        </div>
        <div className="d-flex mt-5">
          <div className="row justify-content-between">
            <div className="col-3 pe-5">
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637577503/ZXp0cGpzbnVmd3JpdHR2M21zMG0=/preview"
                alt=""
              />
            </div>
            <div className="col-3 pe-5">
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637580824/Z21wbnA0bmJ6ajg3aG1qa2Jxa2g=/preview"
                alt=""
              />
            </div>
            <div className="col-3 pe-5">
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637590786/djlrc2xkdTlubnRiZWNreXY3N3Y=/preview"
                alt=""
              />
            </div>
            <div className="col-3 pe-5">
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637590545/ZWhqNzE4aGNhZHI4bWF4ZGR1Zms=/preview"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="text-center">
          <h2 className="fw-bold">Hoa Quả</h2>
        </div>
        <div className="Slide-Swiper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
           
            autoplay={{ delay: 5000 }}
            // slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,

              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            
            className="mySwiper"
          >
            {raucu && raucu.map((item: any, index: number) => (
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
                   to={item.category.slug+"/"+item.slug}
                   className="btn mb-4 text-light "
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
      <div className="container mt-5">
        <div className="thirteen pb-5">
          <h1>HẢI SẢN</h1>
        </div>
        <div className="d-flex">
          <div className=" row justify-content-between mt-5 mb-5">
            {haisan.map((item: any, index: number) => (
              <div
                className="product card me-3  border border-light "
                style={{ width: "18rem" }}
              >
                <div
                  className="card-body text-center"
                  style={{ width: "cover" }}
                >
                  <img src={item.image} className="card-img-top " alt="..." />
                  <div className="mt-5">
                    <h5 className="card-title fw-bold text-center text-dark">
                      {item.name}
                    </h5>
                    <p className="card-text fw-bold">{item.price}</p>
                    <Link
                      to={item.category.slug+"/"+item.slug}
                      className="btn btn-primary text-white text-center"
                    >
                      Thêm vào giỏ hàng
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Show Product */}
      <div className="container-fuild">
        <div className="banner2 mt-5">
          <img
            src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637578063/aG9zaG1lZ2g4bHlxYWNqNHJlb3c=/preview"
            alt=""
          />
        </div>
        <div className="container">
          <div className="title-banner2 text-center">
            <h2 className="text-white fw-bold">
              Khách hàng nói gì về SEAFOOD+
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="row">
              <div className="people-review text-center">
                <img
                  src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637577829/amducGRxZGprdG1udnN0YmhxaDk=/preview"
                  alt=""
                  className="rounded-circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <p className="text-white text-center mt-4">
                  "Sản phẩm chỉ tốt khi nhìn trên ảnh!"
                </p>
                <span className="text-white text-center mt-4 fw-bolder">
                  Nguyễn Đức Hải /{" "}
                  <span className="text-white fw-normal">
                    Sinh viên K16 FPT Polytechnic
                  </span>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="people-review text-center">
                <img
                  src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637577829/amducGRxZGprdG1udnN0YmhxaDk=/preview"
                  alt=""
                  className="rounded-circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <p className="text-white text-center mt-4">
                  "Tốt nhất là không lên mua!"
                </p>
                <span className="text-white text-center mt-4 fw-bolder">
                  Nguyễn Đức Hải /{" "}
                  <span className="text-white fw-normal">
                    Sinh viên K16 FPT Polytechnic
                  </span>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="people-review text-center">
                <img
                  src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637577829/amducGRxZGprdG1udnN0YmhxaDk=/preview"
                  alt=""
                  className="rounded-circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <p className="text-white text-center mt-4">
                  "Sản phẩm chất lượng luôn đặt lên hàng đầu!"
                </p>
                <span className="text-white text-center mt-4 fw-bolder">
                  Nguyễn Đức Hải /{" "}
                  <span className="text-white fw-normal">
                    Sinh viên K16 FPT Polytechnic
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Review */}
      <div className="container">
        <div className="text-center pb-5 title-checked">
          <h2>Cam kết của chúng tôi</h2>
        </div>
        <div className="d-flex justify-content-between pb-5">
          <div className="row">
            <div>
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637577809/amZkY29uZGxzc3hpeThla2V1ZGE=/preview"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div>
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637578478/eHY2dWl5bm5jbHp4aXdibGRhYWk=/preview"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div>
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637580530/bDJjZmVudWxvZWNvOXRrYm85Z2w=/preview"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div>
              <img
                src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1637578478/eHY2dWl5bm5jbHp4aXdibGRhYWk=/preview"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
