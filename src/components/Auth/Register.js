import { useState } from "react";
import '../Auth/Register.scss';
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiService";
import { toast } from 'react-toastify';
import {HiEye, HiEyeOff} from 'react-icons/hi';
const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const handleShowHidePassword = () => {
        setIsShowPassword(true);
    }
    const navigate = useNavigate();
    const handleRegister = async() => {
        let res = await postRegister(email, password, username);
        if(res && res.EC === 0) {
            toast.success(res.EM);
            navigate('/login');
        }
        if(res && res.EC !== 0) { 
            toast.error(res.EM);
        }
    }
    return(
        <div className="register-container">
            <div className='header'>
                <span>Already have an account?</span>
                <button onClick={() => navigate('/login')}>Login</button>
            </div>
            <div className='title col-4 mx-auto'>HoiDanIT &amp; Eric</div>
            <div className='welcome col-4 mx-auto'>Start your journey?</div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email (*)</label>
                    <input 
                        type={'email'} 
                        className='form-control' 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}>
                    </input>
                </div>
                <div className='form-group pass-group'>
                    <label>Password (*)</label>
                    <input 
                        type={isShowPassword ? 'text' : 'password'} 
                        className='form-control' 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}>
                    </input>
                    {isShowPassword 
                        ?<span className="icons-eye" onClick={() => setIsShowPassword(false)}>
                            <HiEye/>
                        </span>
                        :<span className="icons-eye" onClick={() => setIsShowPassword(true)}>
                            <HiEyeOff/>
                        </span> 
                    
                    }
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input 
                        type={'username'} 
                        className='form-control' 
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}>
                    </input>
                </div>
                <div>
                    <button className='btn-submit' onClick={() => handleRegister()}>Create my free account</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() =>{navigate('/')}}> &#60;&#60; Go to Homepage</span>
                </div>
            </div>
        </div>
    )
}
export default Register;