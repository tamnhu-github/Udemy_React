import React from "react";
class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: 'Ha Noi',
        age: ''
    }
    handleOnChangeInput = (event) => {
        this.setState({
          name: event.target.value
        })
    }
    handelOnChangeAge = (event) => {
        this.setState({
          age: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        //ngan chan su kien reload lai trang
        event.preventDefault();
        // console.log(this.state);
        this.props.handleAddNewUser({
            id: Math.floor((Math.random()*100)+1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
            My name is {this.state.name} and I'm from {this.state.age}
            <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
              <label>Your name: </label>
              <input value={this.state.name}
              type="text"
              onChange={(event) => {this.handleOnChangeInput(event)}}/>
              <label>Your age: </label>
              <input value={this.state.age}
              type="text"
              onChange={(event) => {this.handelOnChangeAge(event)}}/>
              <button style={{cursor: 'pointer'}}>Submit</button>
            </form>
            </div>
        )
    }
}
export default AddUserInfor;