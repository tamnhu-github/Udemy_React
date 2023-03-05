import Modal from 'react-bootstrap/Modal';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';

const ModalViewUser = (props) => {
    const {show, setShow, dataView} = props;
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const handleClose = () => {
        setShow(false);
        setEmail('');
        setPass('');
        setUsername('');
        setRole('USER');
        setImage('');
        setPreviewImage('');
        props.resetViewData();
    }
    useEffect(() => {
        //check neu data ko rong
        if(!_.isEmpty(dataView)) {
            //update state
            setEmail(dataView.email);
            setUsername(dataView.username);
            setRole(dataView.role);
            setImage('');
            if(dataView.image) {
              setPreviewImage(`data:image/png;base64,${dataView.image}`);
            }
        }
      },[dataView])
    return(
        <>
        <Modal 
        show={show} 
        onHide={handleClose} 
        size="xl"
        //nhan close hoac X moi co the tat modal
        backdrop='static'
        className='modal-add-view-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>View a user</Modal.Title>
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
                    <input disabled type="text" className="form-control" value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Role</label>
                    <select disabled className="form-select" onChange={(event) => setRole(event.target.value)}>
                      <option value='USER'>USER</option>
                      <option value='ADMIN'>ADMIN</option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label className="form-label label-upload" htmlFor='labelUpload'>
                      <BsFillPlusCircleFill/>
                      Upload file image</label>
                    <input type='file' hidden id='labelUpload'/>
                </div>
                <div className='col-md-12 image-preview'> 
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
        </Modal.Footer>
      </Modal>
    </>
    )
}
export default ModalViewUser;