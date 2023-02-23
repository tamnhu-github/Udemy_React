import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
class DisplayInfor extends React.Component {
    constructor(props) {
        super(props);
        //babel compiler
        this.state = {
            isShowList: true
        }
    }
    componentDidMount() {
        console.log('component did mount');
        setTimeout(() => {
            document.title = 'Hoi Dan IT';
        }, 3000);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('call me did update', this.props, prevProps);
        if(this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 users');
            }
        }
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
            <div className="display-infor-container">
                {/* <img src={logo}/> */}
                <div>
                    <button style={{cursor: 'pointer'}}onClick={(event) => {this.handleShowHide(event)}}>
                        {this.state.isShowList === true ? 'Hide list Users' : 'Display list User'}
                    </button>
                </div>
                {this.state.isShowList && 
                    <div>
                    {listUsers.map((user) => {
                        return(
                            <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                                <>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                </>
                                <><button style={{cursor: 'pointer'}} onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button></>
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