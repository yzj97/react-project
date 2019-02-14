import React from 'react';
import {NavLink} from 'react-router-dom'
import style from './Appfooter.module.css'

const Appfooter = (props) => (
   <div>
      <footer className={style["page-footer"]}>
		<ul>
			<li>
				<NavLink to={{pathname:"/home"}} activeClassName={style.active}>
					<img src="/images/footer001.png"/>
					<p>首页</p>
				</NavLink>
			</li>
			<li>
				<NavLink to={"/assort"} activeClassName={style.active}>
					<img src="/images/footer002.png"/>
					<p>分类</p>
				</NavLink>
			</li>
			<li>
				<NavLink to={'/shopcar'} activeClassName={style.active}>
					<img src="/images/footer003.png"/>
					<p>购物车</p>
				</NavLink>
			</li>
			<li>
				<NavLink to={'/user'} activeClassName={style.active}>
					<img src="/images/footer004.png"/>
					<p>个人中心</p>
				</NavLink>
			</li>
		</ul>
	</footer>
   </div>
);

export default Appfooter