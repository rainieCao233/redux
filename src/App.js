import React, { Component } from 'react';
import {Button} from 'antd-mobile';
import { connect } from 'react-redux'
import { addGUN, removeGUN, addGunAsync } from './index.redux'

import './App.css';
// import {createStore} from "redux"

@connect(
  //state
  state=>({num:state}),
  //function
  { addGUN, removeGUN, addGunAsync },
)

class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div className="App">
        <h1>现在有{this.props.num}把枪</h1>
        <Button type="primary" onClick={this.props.addGUN}>申请机枪</Button>
        <Button type="primary" onClick={this.props.removeGUN}>上交机枪</Button>
        <Button type="primary" onClick={this.props.addGunAsync}>拖延申请机枪</Button>
      </div>
    );
  }
}

// const mapStatetoProps = (state)=>{
//   return {num:state}
// }
// const actionCreators = { addGUN, removeGUN, addGunAsync }
// App = connect(mapStatetoProps, actionCreators)(App)



export default App;
