import axios from "../utils/axiosCustomize";
const postCreateNewUser = (email, password, username, role, img) => {
    //data truyen len co file -> bat buoc dung formdata
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', img);
    return axios.post('api/v1/participant', data);
}
const getAllUsers = () => {
    return axios.get('/api/v1/participant/all');
}
export {postCreateNewUser, getAllUsers};