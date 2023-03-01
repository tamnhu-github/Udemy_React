import ModalCreateUser from "./ModalCreateUser";
import './../Content/ManageUser.scss';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import { useState } from "react";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
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
                    Table users
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>
        </div>
    )
}
export default ManageUser;