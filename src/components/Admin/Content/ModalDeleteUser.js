import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import axios from 'axios';
import { deleteUser } from '../../../services/apiService';
const ModalDeleteUser = (props) => {
    const {show, setShow, dataDelete} = props;

    const handleClose = () => setShow(false);
    const handleConfirmDeleteUser = async() => {
      let data = await deleteUser(dataDelete.id);
      if(data && data.EC === 0) {
        toast.success(data.EM);
        handleClose();
        props.setCurrentPage(1);
        await props.fetchListUsersWithPaginate(1);
      }
      if(data && data.EC !== 0) { 
        toast.error(data.EM);
      }
    }
    return (
    <>
      <Modal 
        show={show} 
        onHide={handleClose}
        backdrop='static'
      
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure to delete the user with <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {handleConfirmDeleteUser()}}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;