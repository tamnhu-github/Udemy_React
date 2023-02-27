import { Sidebar } from "react-pro-sidebar";
import SideBar from "./SideBar";
import '../Admin/Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed ={collapsed}/>
            </div>
            <div className="admin-content">
                <FaBars style={{cursor: 'pointer'}} onClick={() => setCollapsed(!collapsed)}/>
                Content goes here
            </div>
        </div>
    )
}
export default Admin;