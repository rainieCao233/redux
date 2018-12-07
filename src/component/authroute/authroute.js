import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter

class AuthRoute extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname) > -1){
      return null
    }

    // 获取用户信息，是否登录，当前url地址，用户是boss还是genuis，用户是否完善信息（头像，个人简介）
    axios.get('/user/info')
      .then(res=>{
        if(res.status == 200){
          console.log(res.data)
          if(res.data.code == 0){  // 登陆信息

          }else{
            this.props.history.push('/login')
          }
        }
      })
  }
  render(){
    return (
      <h1></h1>
    )
  }
}
export default AuthRoute
