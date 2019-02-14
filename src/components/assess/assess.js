import React from 'react';
import {NavLink} from 'react-router-dom';

const Assess = (props) => (
   <div>
      <header className="top-header fixed-header">
		<a className="icona" href="javascript:history.go(-1)">
				<img src="./images/left.png"/>
			</a>
		<h3>去评价</h3>
			
			<NavLink className="iconb" to={'/shopcar'}>
			</NavLink>
	</header>
	
	<div className="contaniner fixed-cont">
		<section className="assess">
				<p>
					<img src="./images/detail-pp01.png"/>
					<textarea rows="5" placeholder="请写下对宝贝的感受吧，对他人帮助很大哦" ></textarea>
					
				</p>	
				<ul>
					<li>
						商品评价
					</li>
					<li className="assess-right">
						<img onclick="level(1)" src="./images/detail-iocn01.png"/>
						<img onclick="level(2)" src="./images/detail-iocn01.png"/>
						<img onclick="level(3)" src="./images/detail-iocn01.png"/>
						<img onclick="level(4)" src="./images/detail-iocn01.png"/>
						<img onclick="level(5)" src="./images/detail-iocn01.png"/>
					</li>
				</ul>
		</section>
	</div>
   </div>
);

export default Assess