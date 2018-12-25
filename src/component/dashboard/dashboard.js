import React from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { WithRouter } from 'react-router-dom'

@connect(
  state=>state
)

function Boss(){
  return <h2>123</h2>
}
function Genius(){
  return <h2>Genius</h2>
}
function Msg(){
  return <h2>消息中心</h2>
}
function Me(){
  return <h2>个人中心</h2>
}

class DashBoard extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  
  render(){
    const {pathname} = this.props.location
    const user = this.props.user
    const NavList = [
      {path:'/boss',text:'牛人',icon:"boss",title:'牛人列表',component:Boss,hide:user.type=='genius'},
      {path:'/genius',text:'Boss',icon:"job",title:'Boss列表',component:Genius,hide:user.type=='boss'},
      {path:'/msg',text:'消息',icon:"msg",title:'消息列表',component:Msg},
      {path:'/me',text:'我',icon:"user",title:'个人中心',component:Me},
    ]
    return (
      <div>
        <NavBar mode='dark'>{NavList.find(v=>v.path==pathName?v.title:"")}</NavBar>
        <TabBar>
          <TabBar.Item></TabBar.Item>
          <TabBar.Item></TabBar.Item>
          <TabBar.Item></TabBar.Item>
          <TabBar.Item></TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

// <Route path="/boss" component={Boss}></Route>
// <Route path="/genius" component={Genius}></Route>
// <Route path="/me" component={Me}></Route>
// <Route path="/msg" component={Msg}></Route>

export default DashBoard