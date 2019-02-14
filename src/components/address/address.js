import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'

class Address extends Component{
    render(){
        return(
            <div>
               <header className="top-header fixed-header">
		      <a className="icona" href="javascript:history.go(-1)">
				<img src="./images/left.png"/>
			</a>
		<h3>地址管理</h3>
			
			<NavLink className="text-top" to={'/goaddress'}>
				添加
			</NavLink>
	</header>
	
	<div className="contaniner fixed-conta">
		<dl className="address">
			<NavLink to={'/goaddress'}>
				<dt>
					<p>弱小喵</p>
					<span>17756084251</span>
					<small>默认</small>
				</dt>
				<dd>安徽省合肥市高新区科学大道天波路浙商大厦a座806</dd>
			</NavLink>
		</dl>
	</div>
            </div>
        )
    }
}

export default Address
