// import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutWebsite from "./layout/LayoutWebsite";
import { Route, Routes } from "react-router";
import Product from "./component/Product";
import CategoryPage from "./component/CategoryPage";
import LayoutAdmin from "./layout/LayoutAdmin";

import ProductAdmin from "./admin/ProductAdmin";

import Signup from "./features/auth/page/Signup";
import Signin from "./features/auth/page/Signin";
import DetailPage from "./component/DetailPage";
import CategoryAdmin from "./admin/CategoryAdmin";
import AddCategory from "./admin/Category/AddCategory";
import AddProduct from "./admin/Product/AddProduct";
import EditCategory from "./admin/Category/EditCategory";

import EditProduct from "./admin/Product/EditProduct";
import Notfound from "./component/Notfound";
import Cart from "./component/Cart";
import UserAdmin from "./admin/UserAdmin";
import CartAdmin from "./admin/CartAdmin";

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          
          <Route index element={<Product />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path=":slugCate/*">
            <Route index element={<CategoryPage />} />
            <Route path=":slugProduct" element={<DetailPage />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route path="admin/*" element={<LayoutAdmin />}>
          <Route index element={<ProductAdmin />} />
          <Route path="cart" element={<CartAdmin/>} />
          <Route path="user" element={<UserAdmin />} />
          <Route path="product" element={<ProductAdmin />} />
          <Route path="product/add" element={<AddProduct />} />
          <Route path="product/edit/:slug" element={<EditProduct />} />
          <Route path="category" element={<CategoryAdmin />} />
          <Route path="category/add" element={<AddCategory />} />
          <Route path="category/edit/:slug" element={<EditCategory />} />
        </Route>
      </Routes>
    </div>
  );
};
export default Router;
