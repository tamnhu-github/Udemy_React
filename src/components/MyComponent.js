//class component
//function component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name: 'Tam Nhu', age: 16},
            {id: 2, name: 'Thuy Kieu', age: 25},
            {id: 3, name: 'Thuy Van', age: 69}
        ]
    }
    render() {
        return (
            <div>
            <UserInfor/>
            <br/><br/>
            <DisplayInfor listUsers={this.state.listUsers}/>
            </div>
        );
    }
}
export default MyComponent;
