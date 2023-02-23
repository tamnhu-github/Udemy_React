//class component
//function component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name: 'Tam Nhu', age: 16},
            {id: 2, name: 'Thuy Kieu', age: 25},
            {id: 3, name: 'Thuy Van', age: 69}
        ]
    }
    handleAddNewUser = (userObj) => {
        console.log(userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter((item) => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }
    render() {
        return (
            //fragment
            <>
                <div className="a">
                <AddUserInfor handleAddNewUser={this.handleAddNewUser}/>
                <br/><br/>
                <DisplayInfor 
                listUsers={this.state.listUsers}
                handleDeleteUser = {this.handleDeleteUser}
                />
                </div>
                <div className="b"></div>
            </>//fragment
        );
    }
}
export default MyComponent;
