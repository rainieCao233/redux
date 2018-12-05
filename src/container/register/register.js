import React from 'react'
import Logo from './../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio, Flex } from 'antd-mobile'


class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			type:"boss",
		}
	}
	render(){
	console.log(this.props)
	const RadioItem = Radio.RadioItem
		return (
			<div>
				<Logo />
				<h4>注册页面</h4>
				<WingBlank>
					<List>
						<InputItem>用户名</InputItem>
						<WhiteSpace />
						<InputItem>密码</InputItem>
						<WhiteSpace />
						<InputItem>确认密码</InputItem>
						<WhiteSpace />
						<RadioItem checked={this.state.type=="genuis"}>牛人</RadioItem>
						<RadioItem checked={this.state.type=="boss"}>BOSS</RadioItem>
						<WhiteSpace />
						<Button type="primary">注册</Button>
					</List>
				</WingBlank>
			</div>	
		)
	}
}
 export default Register