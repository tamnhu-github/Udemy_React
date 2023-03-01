import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsFillPlusCircleFill} from 'react-icons/bs';
const ModalCreateUser = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('USER');
  const [img, setImg] = useState('');
  const [previewImage, setPreviewImage] = useState('')
  const handleUploadImage = (event) => {
    //user upload file moi cap nhat anh
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImg(event.target.files[0]);
    }
    // else {
    //   setPreviewImage('');
    // }
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal 
        show={show} 
        onHide={handleClose} 
        size="xl"
        //nhan close hoac X moi co the tat modal
        backdrop='static'
        className='modal-add-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password}
                      onChange={(event) => setPass(event.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Role</label>
                    <select className="form-select" onChange={(event) => setRole(event.target.value)}>
                      <option value='USER'>USER</option>
                      <option value='ADMIN'>ADMIN</option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label className="form-label label-upload" htmlFor='labelUpload'>
                      <BsFillPlusCircleFill/>
                      Upload file image</label>
                    <input type='file' hidden id='labelUpload' value={img}
                      onChange={(event) => handleUploadImage(event)}
                    />
                </div>
                <div className='col-md-12 img-preview'> 
                  {previewImage 
                  ? <img src={previewImage}></img>
                  : <span>Preview Image</span>
                  }
                </div>
            </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCreateUser;