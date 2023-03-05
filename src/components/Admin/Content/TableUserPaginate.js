import ReactPaginate from 'react-paginate';
// import { useState, useEffect } from 'react';
const TableUserPaginate = (props) => {
    const {listUsers, pageCount} = props;
    const handlePageClick = (event) => {
        //event.selected la mot chuoi string -> convert sang number
        props.fetchListUsersWithPaginate(+event.selected + 1);
        props.setCurrentPage(+event.selected + 1);
        console.log(`User requested page number ${event.selected}`);
    };
     return(
         <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Active</th>
                    </tr>
                </thead>
                <tbody>
                     {listUsers && listUsers.length > 0 &&
                     listUsers.map((item, index) => {
                         return(
                             <tr key={`table-users-${index}`}>
                                 <td>{item.id}</td>
                                 <td>{item.username}</td>
                                 <td>{item.email}</td>
                                 <td>{item.role}</td>
                                 <td>
                                     <button className="btn btn-info"
                                         onClick={() => props.handleClickBtnView(item)}
                                     >View</button>
                                     <button 
                                         onClick={() => props.handleClickBtnUpdate(item)}
                                         className="btn btn-warning mx-3">
                                         Update
                                     </button>
                                     <button className="btn btn-danger"
                                         onClick={() => props.handleClickBtnDelete(item)}
                                     >Delete</button>
 
                                 </td>
                             </tr>
                         )
                     })
                     }
                     {listUsers && listUsers.length === 0 &&
                         <tr>
                             <td colSpan={'4'}>Not found data</td>
                         </tr> 
                     }
                </tbody>
            </table>
            <div className='user-pagination d-flex justify-content-center'>
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage -1}
                />
            </div>        
         </>
     )
 }
 export default TableUserPaginate;