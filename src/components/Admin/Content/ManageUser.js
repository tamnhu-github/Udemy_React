import ModalCreateUser from "./ModalCreateUser";
const ManageUser = (props) => {
    return(
        <div className="manage-users-container">
            <div className="manage-users-title">Manage User</div>
            <div className="manage-users-content">
                <div>
                    <button>Add new user</button>
                </div>
                <div>
                    <ModalCreateUser/>
                </div>
            </div>
        </div>
    )
}
export default ManageUser;