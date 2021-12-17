
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from "react-router-dom"
import { Link } from 'react-router-dom';
import  '../admin/Admin.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const LayoutAdmin : React.FC = () => {
    const user = useSelector((state: any) => state.auth.auth);
    const navigate = useNavigate();
    useEffect(() =>{
   
    if (user.user) {
        if (user.user.role == 0) {
            navigate("/")
        } else{
            navigate('/admin')
        }
        
    }else{
        navigate('/')
    }
    },[])
    
   
      return(
          <div>
               <Layout>
            <Sider trigger={null} collapsible >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/admin/product">Sản phẩm</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/admin/category">Danh mục</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/admin/user">User</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<UploadOutlined />}>
                <Link to="/admin/cart">Cart</Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
               
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                <Outlet/>
              </Content>
            </Layout>
          </Layout>
          </div>
      )
    
   
  
}

export default LayoutAdmin;
