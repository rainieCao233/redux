import React from 'react'
import propTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter

class NavLinkBar extends React.Component{
  static propTypes = {
    data: propTypes.array.isRequired
  }
  render(){
    const navList = this.props.data.filter(v=>!v.hide)
    const {pathname} = this.props.location
    return (
      <TabBar>
        {navList.map(v=>(
          <TabBar.Item 
            title={v.text} 
            key={v.path} 
            icon="" 
            selectedIcon="" 
            selected={pathname===v.path} 
            onPress={()=>{
              this.props.history.push(v.pathname)
            }}></TabBar.Item>
        ))}
      </TabBar>
    )
  }
}

export default NavLinkBar