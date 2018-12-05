import React from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './Auth.redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

@connect(
	state=>state.auth,
	{login, getUserData}
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
	componentDidMount(){
		console.log(this.props.user,this.props.age)
		this.props.getUserData();
		const that = this;
		setTimeout(()=>{
			console.log(that.props.user,that.props.age)
		},2000)
	}
  render(){
    return (
      <div>
				{/* <h2>我的名字是{this.state.data.user}</h2> */}
				<h2>我的名字是{this.props.user},年龄{this.props.age}</h2>
				{ this.props.isAuth? <Redirect to='/dashboard' /> : null}
        <h2>你没有权限，需要登录才能看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth;
