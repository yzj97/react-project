import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Login extends Component{
	constructor(props){
		  super()
		  this.state={
			  username:'',
			  password:''
		  }
	}
	render(){
		return(
         <div>
      <header className="top-header">
		<NavLink className="text texta" to={'/home'}>取消</NavLink>
		<h3>登录</h3>
		<NavLink className="text" to={'/reg'}>注册</NavLink>
	</header>
	
	<div className="login">
		<form>
			<ul>
				<li>
					<img src="./images/login.png"/>
					<label>账号</label>
					<input type="text" placeholder="请输入账号" value={this.state.username} onChange={this.changeIpt.bind(this)} name='username'/>
				</li>
				<li>
					<img src="./images/password.png"/>
					<label>密码</label>
					<input type="password" placeholder="请输入密码" value={this.state.password} name="password" onChange={(ev)=>this.changeIpt(ev)}/>
				</li>
			</ul>
			<input type="button" defaultValue="登录" onClick={this.login.bind(this)} className='submit'/>
		</form>
	</div>
   </div>
		)
	}
	changeIpt(ev){
		this.setState({
			[ev.target.name]:ev.target.value
		})
	}
	login(){

	
		fetch(
			`/data/user.json`
		).then(
			res=>res.json()
		).then(
			data=>{
				data.forEach(item=>{
					// console.log(item,this.state.username,this.state.password)
					console.log(this.state.username)
					console.log(item.data.username)

               if(item.data.username == this.state.username && item.data.password == this.state.password ){
						this.props.history.push({pathname:'/user'})
					}else{
						this.props.history.push({pathname:'/error'})
					}
				})
				
				
			}
		)
	}
}

export default Login