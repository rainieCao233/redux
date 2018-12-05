import React from 'react';
import { connect } from 'react-redux'
import { logout } from './Auth.redux'
import { Redirect } from 'react-router-dom'

@connect(
  state=>state.auth,
  {logout}
)
class Dashboard extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    console.log()
    return(
      <div>
        { !this.props.isAuth? <Redirect to='/login' /> : null }
        <h2>我的名字是{this.props.user},年龄{this.props.age}</h2>
        <button onClick={this.props.logout}>logout</button>
      </div>
    )
  }
}

export default Dashboard
