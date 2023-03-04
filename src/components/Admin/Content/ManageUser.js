import ModalCreateUser from "./ModalCreateUser";
import './../Content/ManageUser.scss';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        fetchListUsers();
    }, []);
    const fetchListUsers = async() => {
        let res = await getAllUsers();
        if(res && res.EC === 0) {
            setListUsers(res.DT);
        }
    }
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        // console.log(user);
        setDataUpdate(user);
    }
    const resetUpdateData = () => {
        setDataUpdate({});
    }
    return(
        <div className="manage-users-container">
            <div className="manage-users-title">Manage User</div>
            <div className="manage-users-content">
                <div className="btn-add-new-user">
                    <button className="btn btn-success" onClick={() => setShowModalCreateUser(true)}>
                        <BsFillPlusCircleFill/>
                        Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser 
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                    />
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                show={showModalUpdateUser}
                setShow={setShowModalUpdateUser}
                dataUpdate={dataUpdate}
                fetchListUsers={fetchListUsers}
                resetUpdateData={resetUpdateData}
                />
            </div>
        </div>
    )
}
export default ManageUser;