import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponent';
import React from 'react';
class App extends React.Component {
  state = {
    name: 'ABC',
    address: 'Ha Noi',
    age: 20
  }
  handleClick(event) {
    console.log('My name is ', this.state.name, 'I\'m', this.state.age);
    //merge state => React class
    this.setState ({
      name: 'New Name',
      age: Math.floor((Math.random() * 100) + 1)
    })
  }
  handleMouseOver(event) {
    // console.log(event.pageX);
  }
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleOnSubmit = (event) => {
    //ngan chan su kien reload lai trang
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
          My name is {this.state.name} and I'm from {this.state.age}
          <form onSubmit={(event) => {this.handleOnSubmit(event)}}>
            <input type="text"
            onChange={(event) => {this.handleOnChangeInput(event)}}/>
            <button>Submit</button>
          </form>
      </div>
    );
  }
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
