import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiService';
import _ from 'lodash';

const ModalUpdateUser = (props) => {
  const { show, setShow, dataUpdate } = props;
  const handleClose = () => {
    setShow(false);
    setEmail('');
    setPass('');
    setUsername('');
    setRole('USER');
    setimage('');
    setPreviewImage('');
  }
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('USER');
  const [image, setimage] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  useEffect(() => {
    //check neu data ko rong
    if(!_.isEmpty(dataUpdate)) {
        //update state
        setEmail(dataUpdate.email);
        setUsername(dataUpdate.username);
        setRole(dataUpdate.role);
        setimage('');
        if(dataUpdate.image) {
            setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
        }
    }
  }, [dataUpdate])
  const handleUploadImage = (event) => {
    //user upload file moi cap nhat anh
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setimage(event.target.files[0]);
    }
    // else {
    //   setPreviewImage('');
    // }
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  const handleSubmitCreateUser = async() => {
    //validate
    const isValidEmail = validateEmail(email);
    if(!isValidEmail) {
      toast.error('Invalid email');
      return;
    }
    if(!password) { 
      toast.error('Invalid password');
      return;
    }
    //call apis
    let data = await postCreateNewUser(email, password, username, role, image);
    if(data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.fetchListUsers();
    }
    if(data && data.EC !== 0) { 
      toast.error(data.EM);
    }
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal 
        show={show} 
        onHide={handleClose} 
        size="xl"
        //nhan close hoac X moi co the tat modal
        backdrop='static'
        className='modal-add-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input disabled type="email" className="form-control" value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input disabled type="password" className="form-control" value={password}
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
                    <input type='file' hidden id='labelUpload' value={image}
                      onChange={(event) => handleUploadImage(event)}
                    />
                </div>
                <div className='col-md-12 image-preview'> 
                  {previewImage 
                  ? <image src={previewImage}></image>
                  : <span>Preview Image</span>
                  }
                </div>
            </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalUpdateUser;