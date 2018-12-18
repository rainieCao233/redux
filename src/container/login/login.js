import React from 'react'
import Logo from './../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
	state=>state.user,
	{login}
)
class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user:'',
			pwd:''
		}
		this.handleLogin = this.handleLogin.bind(this)	
		this.register = this.register.bind(this)	
		}
	handleChange(key, value){
		this.setState({
			[key]:value
		})
	}
	handleLogin(){
		this.props.login(this.state)	
	}
	register(){
		// this.props.history.push('/register')
	}
	handleChange(key, value){
		this.setState({
			[key]:value
		})
	}
	login(){
		this.props.login(this.state)
	}
	render(){
		return (
			<div>
				{this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
				<Logo />
				<h4>登录页面</h4>
				<WingBlank>
					{this.props.msg?(<p className="error-msg">{this.props.msg}</p>):null}
					<List>
						<InputItem onChange={v=>this.handleChange('user',v)}>用户</InputItem>
						<WhiteSpace />
						<InputItem onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
					</List>
					<WhiteSpace />
					<Button type="primary" onClick={this.handleLogin}>登录</Button>
					<WhiteSpace />
					<Button type="primary" onClick={this.register}>注册</Button>
				</WingBlank>
			</div>
		)
	}
}

export default Login
