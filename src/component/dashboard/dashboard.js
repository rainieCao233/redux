import React from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavLinkBar  from '../navlink/navlink'
import { loadData } from '../../redux/user.redux'

@withRouter
@connect(
  state=>state,
  {loadData}
)

class Boss extends React.Component{
  render(){
    return (
      <h2>123</h2>
    )
  }
}
class Genius extends React.Component{
  render(){
    return (
      <h2>Genius</h2>
    )
  }
}
class Msg extends React.Component{
  render(){
    return (
      <h2>Msg</h2>
    )
  }
}
class Me extends React.Component{
  render(){
    return (
      <h2>Me</h2>
    )
  }
}

class DashBoard extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    const {pathname} = this.props.location
    const User = this.props.user
    console.log("123",this.props)
    const NavList = [
      // {path:'/boss',text:'牛人',icon:"boss",title:'牛人列表',component:Boss,hide:User.type=='genius'},
      // {path:'/genius',text:'Boss',icon:"job",title:'Boss列表',component:Genius,hide:User.type=='boss'},
      {path:'/msg',text:'消息',icon:"msg",title:'消息列表',component:Msg},
      {path:'/me',text:'我',icon:"user",title:'个人中心',component:Me},
    ]
    return (
      <div>
        <NavBar mode='dark'>{NavList.find(v=>v.path==pathname?v.title:"")}</NavBar>
        <NavLinkBar data={NavList}></NavLinkBar>
      </div>
    )
  }
}

// <Route path="/boss" component={Boss}></Route>
// <Route path="/genius" component={Genius}></Route>
// <Route path="/me" component={Me}></Route>
// <Route path="/msg" component={Msg}></Route>

{/* <TabBar>
          <TabBar.Item></TabBar.Item>
          <TabBar.Item></TabBar.Item>
          <TabBar.Item></TabBar.Item>
          <TabBar.Item></TabBar.Item>
        </TabBar> */}
export default DashBoard