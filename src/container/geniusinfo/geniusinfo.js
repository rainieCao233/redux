import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { List, InputItem, WingBlank, WhiteSpace, Button, TextareaItem } from 'antd-mobile'
import AvatorSelector from '../../component/avator-selector/avator-selector'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
  state=>state.user,
  { update }
)

class GeniusInfo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title:"",
      desc:"",
      company:"",
      money:""
    }
    this.selectAvator = this.selectAvator.bind(this)
  }
  onChange(key,val){
    this.setState({
      [key]:val
    })
  }
  selectAvator(imageName){
    this.setState({
      avator:imageName
    })
  }
  render(){
    const path = this.props.location.path
    return (
      <div>
        {this.props.redirectTo && path !== this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <NavBar mode="dark">牛人完善信息页面</NavBar>
        <AvatorSelector selectAvator={this.selectAvator} ></AvatorSelector>
        <InputItem onChange={v=>this.onChange('title',v)}>求职职位</InputItem>
        <TextareaItem onChange={v=>this.onChange('desc',v)}
                      rows="3"
                      autoHeight
                      title="职位要求">个人简历</TextareaItem>
        <Button 
            onClick={()=>{
              this.props.update(this.state)
            }}
            type="primary">保存</Button>
      </div>
    )
  }
}

export default GeniusInfo