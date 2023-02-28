import { Sidebar } from "react-pro-sidebar";
import SideBar from "./SideBar";
import '../Admin/Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed ={collapsed}/>
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars style={{cursor: 'pointer'}} onClick={() => setCollapsed(!collapsed)}/>
                </div>
                <div className="admin-main">
                    <Outlet/>
                </div>
                
            </div>
        </div>
    )
}
export default Admin;