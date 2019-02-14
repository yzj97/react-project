import React from 'react';
import {NavLink} from 'react-router-dom';
const Datum = (props) => (
   <div>
      <header className="top-header">
			<a className="icona" href="javascript:history.go(-1)">
					<img src="./images/left.png"/>
				</a>
			<h3>我的资料</h3>
			<NavLink className="iconb" to={'/shopcar'}>
			</NavLink>
	</header>
	
	<div className="contaniner">
		<ul className="self-data">
			<li>
				<a href="javascript:;">
					<p>头像</p>
					<span><img src="./images/right.png"/></span>					
					<figure><img src="./images/detail-tou.png"/></figure>
				</a>
			</li>
			<li>
				<NavLink to={'/namechange'}>
					<p>昵称</p>
					<span><img src="./images/right.png"/></span>
					<small>弱小喵</small>
					
				</NavLink>
			</li>
			<li>
				<a href="javascript:;">
					<p>性别</p>
					<span><img src="./images/right.png"/></span>
					<select>
						<option>男</option>
						<option>女</option>
					</select>
					
				</a>
			</li>
		</ul>
	</div>
   </div>
);

export default Datum