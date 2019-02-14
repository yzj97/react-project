import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect'
import asyncUser from "../../store/actions/asynUser";

class Login extends Component{
	
		  state={
			  username:'',
			  password:''
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
			<input type="button" defaultValue="登录" onClick={
				 this.props.login.bind(null,this.state.username,this.state.password,this.props.history)
				} className='submit'/>
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
}
	
const initMapStateToProps=state=>({
		// username:state.user.data.username
});
const initMapDispatchToProps=dispatch=>({
	login:(username,password,history)=>dispatch(asyncUser({
		url:'/data/user.json',
		username,password
	})).then(
		(auth)=>{
			if(auth){
				history.push({pathname:'/user'}) 
			}else{
                history.push({pathname:'/error'})
			}
		}
	)
});
	  
	  
export default connect(
initMapStateToProps,
initMapDispatchToProps
)(Login);