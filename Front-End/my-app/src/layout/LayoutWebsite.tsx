import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import '../layout/front-end.css';

const LayoutWebsite: React.FC = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    
    </div>
  );
};
export default LayoutWebsite;