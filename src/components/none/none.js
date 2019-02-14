import React from 'react';
import {NavLink} from 'react-router-dom'

const None = (props) => (
   <div>
      <header className="top-header fixed-header">
		<a className="icona" href="javascript:history.go(-1)">
				<img src="./images/left.png"/>
			</a>
		<h3>我的分销</h3>
			
			<NavLink className="iconb" to={'/shopcar'}>
				<img src="./images/shopbar.png"/>
			</NavLink>
	</header>
	
	<div className="contaniner fixed-conta">
		<div className="none">
			<h3>
				<img src="./images/shopnone.png"/>
			</h3>
			<p>
				<span>您还没有分销</span>
				<a href="javascript:;">去添加</a>
			</p>
		</div>
	</div>
   </div>
);

export default None