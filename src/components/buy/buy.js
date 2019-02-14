import React from 'react';
import {NavLink} from 'react-router-dom';
const Buy = (props) => (
   <div>
         <header className="top-header fixed-header">
			<a className="icona" href="javascript:history.go(-1)">
					<img src="./images/left.png"/>
			</a>
			<h3>去结算</h3>
			<NavLink className="iconb" to={'/shopcar'}>
			</NavLink>
	</header>
	
	<div className="contaniner fixed-cont">
		<section className="to-buy">
			<header>
				<div className="now">
					<span><img src="./images/map-icon.png"/></span>
						<dl>
							<dt>
								<b>弱小喵</b>
								<strong>17756084251</strong>
							</dt>
							<dd>安徽省合肥市高新区科学大道天波路浙商大厦a座806安徽省合肥市</dd>
							<p>其他地址</p>
						</dl>
				</div>
				
				<div className="to-now">
					<div className="tonow">
							<label for="tonow"  onselectstart="return false" ></label>
							<input type="checkbox" id="tonow"/>
					</div>
					<dl>
							<dt>
								<b>弱小喵</b>
								<strong>17756084251</strong>
							</dt>
							<dd>安徽省合肥市高新区科学大道天波路浙商大厦a座806安徽省合肥市</dd>
					</dl>
					<h3><NavLink to={'/goaddress'}><img src="./images/write.png"/></NavLink></h3>
				</div>
			</header>
			<div className="buy-list">
				<ul>
					<NavLink to={'/detail'}>
						<figure>
							<img src="./images/detail-pp01.png"/>
						</figure>
						<li>
							<h3>超级大品牌服装，现在够买只要998</h3>
							<span>
								颜色：经典绮丽款
								<br />
								尺寸：M
							</span>
							<b>￥32.00</b>
							<small>×3</small>
						</li>
					</NavLink>
				</ul>
				<dl>
					<dd>
						<span>运费</span>
						<small>包邮</small>
					</dd>
					<dd>
						<span>商品总额</span>
						<small>￥98.00</small>
					</dd>
					<dt>
						<textarea rows="4" placeholder="给卖家留言（50字以内）"></textarea>
					</dt>
				</dl>
			</div>
			
		</section>
		<div style={{'marginBottom':'9%'}}></div>
	</div>
   </div>
);

export default Buy