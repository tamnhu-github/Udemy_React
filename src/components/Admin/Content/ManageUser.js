import ModalCreateUser from "./ModalCreateUser";
import './../Content/ManageUser.scss';
const ManageUser = (props) => {
    return(
        <div className="manage-users-container">
            <div className="manage-users-title">Manage User</div>
            <div className="manage-users-content">
                <div>
                    <button>Add new user</button>
                </div>
                <div>
                    Table user
                </div>
                <ModalCreateUser/>
            </div>
        </div>
    )
}
export default ManageUser;