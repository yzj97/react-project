import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'

class Namechange extends Component{
    render(){
        return(
          <div>
             <header className="top-header">
		<a className="icona" href="javascript:history.go(-1)">
				<img src="images/left.png"/>
			</a>
		<h3>修改昵称</h3>
			
			<NavLink className="iconb" to={'/shopcar'}>
			</NavLink>
	</header>
	
	<div className="contaniner">
		<form action="" method="post" className="nameform">
			<div className="namechange">
				<img src="./images/a-icon01.png"/>
				<input type="text" placeholder="弱小喵"/>
			</div>
			<p>推荐使用中文，5-25个字符</p>
			<input type="submit" value="保存"/>
		</form>
		
	</div>
          </div>
        )}
   }

export default Namechange