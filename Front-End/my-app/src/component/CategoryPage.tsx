import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listCategory } from "../api/categories";
import { listCategoryProduct } from "../api/products";
import { useParams } from "react-router-dom";
import { IProduct } from "../model/product";

function CategoryPage() {
  const { slugCate } = useParams();
  const [inputPrice, setInputPrice] = useState(0)
  const [categories, setCategories] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    listCategory().then((response: AxiosResponse) =>
      setCategories(response.data)
    );
    listCategoryProduct(slugCate).then((res: AxiosResponse) =>
      setProducts(res.data)
    );
  }, [slugCate]);


const handleChangeInput = (e: any) => {
    setInputPrice(Number(e.target.value))
}
let dataFilter = products
if(inputPrice > 0){
    dataFilter = products.filter((data: any) => (inputPrice < Number(data.price)))
    
}

  return (
    <div>
      <div>
        <div className="container pb-5">
          <div className="d-flex justify-content-between">
            <div className="row">
              <div className="header-left">
                <div className="mt-4">
                  <span className="fw-bold fs-5">
                    TRANG CHỦ / <span className="text-dark"> DANH MỤC</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="header-right">
                <div className="mb-2">
                  <span>Chỉ hiển thị một kết quả duy nhất</span>
                </div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Thứ tự mặc định</option>
                  <option value={1}>Giá sản phẩm từ cao đến thấp</option>
                  <option value={2}>Giá sản phẩm từ thấp đến cao</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* End Header-bottom */}
        <div className="container">
          <div className="d-flex">
            <div className="col-3 pe-5">
              <div className="nav-menu">
                <div className="nav-menu-content  p-3">
                  <span className="text-white fw-bold ps-2">
                    DANH MỤC SẢN PHẨM
                  </span>
                </div>
                <div className="list-nav-menu">
                  <ul>
                    {categories &&
                      categories.map((item: any, index: any) => {
                        return (
                          <li className="bg-light ps-4 border boder-1">
                            <Link to="">{item.name}</Link>
                          </li>
                        );
                      })}
                  </ul>
                  <Link to=""></Link>
                </div>
                <Link to=""></Link>
              </div>
              <Link to="">
                <div className="nav-menu2 mt-4">
                  <div className="nav-menu-content  p-3">
                    <span className="text-white fw-bold ps-2">
                      LỌC THEO GIÁ
                    </span>
                  </div>
                  <div className=" bg-light pt-2">
                    <div className="pt-2 ps-4 px-4">
                      <input
                        type="range" className="form-range" id="customRange2" onChange={handleChangeInput} value={inputPrice}
                        min={0} max={300000}
                      />
                    </div>
                    <div className="d-flex justify-content-between pb-3">
                      <div className="ps-4">
                        <button className="btn btn-danger">LỌC</button>
                      </div>
                      <div className="mt-2 px-1 ">
                        <span>
                          Giá: <span>{inputPrice}đ</span> - {300000}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-4">
                  <div className="nav-menu-content  p-3">
                    <span className="text-white fw-bold ps-2">
                      SẢN PHẨM NỔI BẬT
                    </span>
                  </div>
                  <div className="nav-menu3 bg-light pt-1 ">
                    <table className="table shop_attributes d-block">
                      <tbody>
                        {products &&
                          products.map((item: any, index: number) => (
                            <tr>
                              <td>
                                <img
                                  src={item.image}
                                  alt=""
                                  width="100%"
                                />
                              </td>
                              <td>
                                <span className="fw-bold">
                                  {" "}
                                  {item.name}{" "}
                                </span>
                                <p className="pt-2 text-danger">{item.price} ₫</p>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Link>
            </div>
            <Link to="">
              <div className="col-12">
                <div className="d-flex ">
                  <div className="row justify-content-between">
                    {dataFilter &&
                      dataFilter.map((item: IProduct, index: any) => {
                        return (
                          <div
                            className="product card me-3  border border-light  pb-5"
                            style={{ width: "19rem" }}
                          >
                            <div
                              className="card-body text-center"
                              style={{ width: "cover" }}
                            >
                              <img
                                src={item.image}
                                className="card-img-top "
                                alt="..."
                              />
                              <div className="mt-5">
                                <h5 className="card-title fw-bold text-center text-dark">
                                  {item.name}
                                </h5>
                                <p className="card-text fw-bold">
                                  {item.price} ₫
                                </p>
                                <Link
                                  to={item.slug}
                                  className="btn btn-primary text-white text-center"
                                >
                                  XEM CHI TIẾT
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <Link to=""></Link>
        </div>
        <Link to=""></Link>
      </div>
    </div>
  );
}

export default CategoryPage;
