import ModalCreateUser from "./ModalCreateUser";
import './../Content/ManageUser.scss';
import {BsFillPlusCircleFill} from 'react-icons/bs';
// import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";
import { set } from "lodash";

const ManageUser = (props) => {
    const LIMIT_USER = 3;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        fetchListUsersWithPaginate(1);
    }, []);
    const fetchListUsers = async() => {
        let res = await getAllUsers();
        if(res && res.EC === 0) {
            setListUsers(res.DT);
        }
    }
    const fetchListUsersWithPaginate = async(page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if(res && res.EC === 0) {
            console.log(res.DT);
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }
    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }
    const resetUpdateData = () => {
        setDataUpdate({});
    }
    const resetViewData = () => {
        setDataView({});
    }
    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
    }
    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
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
                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate 
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser 
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    resetUpdateData={resetUpdateData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                    resetViewData={resetViewData}
                />
                <ModalDeleteUser 
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}
export default ManageUser;