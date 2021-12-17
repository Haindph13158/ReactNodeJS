import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listCategory } from "../api/categories";
import { list } from "../api/products";
import { ICategory } from "../model/category";
import { Signout } from "../slice/authSlice";

function Header() {
  const [search, setSearch]: [string, (search: string) => void] = useState("");
  const [products, setProducts] = useState<any>([]);

  const searchProduct = products.filter((item: any) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    list().then((response: AxiosResponse) => setProducts(response.data));
  }, []);

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.auth);
  const [categories, setCategories] = useState<any>([]);
  useEffect(() => {
    listCategory().then((response: AxiosResponse) =>
      setCategories(response.data)
    );
  }, []);

  return (
    <div>
      <div className="container-fuild pb-3">
        <div className="container">
          <div className="header ">
            <div className="header-top row">
              <div className="d-flex top-header justify-content-between">
                <div className="top-header-text">
                  <i className="far fa-envelope " />
                  <span>haindph13158@fpt.edu.vn </span>
                  <span>|</span>
                  <span>
                    <i className="fas fa-phone" />
                  </span>
                  <span>096.885.6903</span>
                </div>
                <div className="top-header-text">
                  {user.user ? (
                    <span>
                      {user.user.email}
                      <button
                        className="btn"
                        onClick={() => dispatch(Signout())}
                      >
                        Đăng xuất
                      </button>
                    </span>
                  ) : (
                    <Link to="/signup">Đăng nhập / Đăng ký</Link>
                  )}
                  <span>|</span>
                  <Link to="/cart" className="btn-shop">
                    Giỏ hàng 0đ <i className="fas fa-shopping-cart" />
                  </Link>
                  <div className="cart-hover border border-3">
                    <div className="cart-content text-center">
                      <span>Chưa có sản phẩm nào!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-content">
              <div className="row mt-3">
                <div className="col-2   mt-2 logo">
                  <Link to="">
                    <img
                      src="https://res-console.cloudinary.com/dvqnyjmr8/thumbnails/v1/image/upload/v1638154784/VW50aXRsZWQyX3JrZ2Vjdg==/preview"
                      alt=""
                    />{" "}
                  </Link>
                </div>
                <div className="col-8 ps-5">
                  <div className="d-flex justify-content-evenly">
                    {categories &&
                      categories.map((item: ICategory, index: any) => {
                        return (
                          <div className="menu text-center p-2 mt-5  ">
                            <Link to={item.slug}>{item.name}</Link>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="col-2">
                  <div className=" input-search mt-5">
                    <input
                      type="text"
                      placeholder="Tìm kiếm..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>
                      <i className="fas fa-search" />
                    </button>

                    <div className=" placeholder-sreach container-fuild">
                      <table
                        className="table-sreach " style={{display:'inline-block',maxWidth:'250px',maxHeight:'400px',overflow:'auto'}}
                       
                      >
                        <tbody>
                          {search !== "" &&
                            searchProduct.map((item: any) => (
                              <tr>
                                <th className="col-4">
                                  <img src={item.image} alt="" width="100%" />
                                </th>
                                <th className="ps-3 col-10">
                                  {" "}
                                  <Link to={item.category.slug +"/" + item.slug}>
                                    {item.name}
                                  </Link>{" "}
                                  <p>{item.id}</p>{" "}
                                  <p className="text-danger">{item.price}đ</p>{" "}
                                </th>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
