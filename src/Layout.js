import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import Homepage from './components/Home/Homepage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const Layout = (props) => {
    return(
        <>
            <Routes>
                <Route path='/' element={<App/>}>        
                    <Route index element={<Homepage/>} />
                    <Route path='users' element={<User/>} />
                </Route>
                <Route path='/admin' element={<Admin/>}> 
                    <Route index element={<DashBoard/>} />
                    <Route path='manage-users' element={<ManageUser/>}/>
                </Route>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
                {/* Same as */}
            <ToastContainer />
        </>
    )
}
export default Layout;