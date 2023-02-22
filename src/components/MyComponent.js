//class component
//function component
import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";
class MyComponent extends React.Component {
    render() {
        const myInfor = ['abc','def'];
        return (
            <div>
            <UserInfor/>
            <br/><br/>
            <DisplayInfor name="HoiDanIT" age="32" myInfor={myInfor}/>
            </div>
        );
    }
}
export default MyComponent;
