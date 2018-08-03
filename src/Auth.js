import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'

@connect(
	state=>state.auth,
	{login}
)

class Auth extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     data:{}
  //   }
  // }
  // componentDidMount(){
  //   axios.get('/data')
  //     .then(res=>{
  //       if(res.status === 200){
  //         console.log(res.data)
  //         this.setState({data:res.data})
  //       }
  //     })
  // }
  render(){
    return (
      <div>
        <h2>我的名字是{this.props.user},年龄{this.props.age}</h2>
        {this.props.isAuth? <Redirect to='/dashboard' /> : null}
        <h2>你没有权限，需要登录才能看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth;
