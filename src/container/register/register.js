import React from 'react'
import Logo from './../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio, Flex } from 'antd-mobile'
import axios from 'axios'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
	state => state.user,
	{register}
)

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user:'',
			pwd:'',
			repeatpwd:'',
			type:"boss",
		}
		this.handleRegister = this.handleRegister.bind(this)
	}
	handleChange(key, value){
		this.setState({
			[key]:value
		})
	}
	handleRegister(){
		console.log(this.state);
		this.props.register(this.state);
		// axios.get('/user/info')
    //   .then(res=>{
    //     if(res.status == 200){
    //       console.log(res.data)
    //       if(res.data.code == 0){  // 登陆信息
		//
    //       }else{
    //         this.props.history.push('/login')
    //       }
    //     }
    //   })
	}
	render(){
		console.log("this.props",this.props)
		const RadioItem = Radio.RadioItem
		return (
			<div>
				{this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
				<Logo />
				<h4>注册页面</h4>
				<WingBlank>
					{this.props.msg?(<p className="error-msg">{this.props.msg}</p>):null}
					<List>
						<InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
						<WhiteSpace />
						<InputItem onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
						<WhiteSpace />
						<InputItem onChange={v=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
						<WhiteSpace />
						<RadioItem checked={this.state.type=="genuis"} onChange={()=>this.handleChange('type',"genuis")}>牛人</RadioItem>
						<RadioItem checked={this.state.type=="boss"} onChange={()=>this.handleChange('type',"boss")}>BOSS</RadioItem>
						<WhiteSpace />
						<Button type="primary" onClick={this.handleRegister}>注册</Button>
					</List>
				</WingBlank>
			</div>
		)
	}
}
 export default Register
