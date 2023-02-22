import React from "react";
class DisplayInfor extends React.Component {
    state = {
        isShowList: true
    }
    handleShowHide = (event) => {
        this.setState({
            //toggle
            isShowList: !this.state.isShowList
        })
    }
    render() {
        // destructuring array/object
        const { listUsers } = this.props; //object
        // console.table(listUsers);
        return (
            <div>
                <div>
                    <button onClick={(event) => {this.handleShowHide(event)}}>
                        {this.state.isShowList === true ? 'Hide list Users' : 'Display list User'}
                    </button>
                </div>
                {this.state.isShowList && 
                    <div>
                    {listUsers.map((user) => {
                        return(
                            <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <hr/>
                            </div>
                            )
                    })}
                    </div>
                }
            </div>
        );
    }
}
export default DisplayInfor;