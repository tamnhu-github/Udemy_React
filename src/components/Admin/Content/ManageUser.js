import ModalCreateUser from "./ModalCreateUser";
import './../Content/ManageUser.scss';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
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
                    <TableUser listUsers={listUsers}/>
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}
export default ManageUser;