import React from 'react';

const Shopcar = (props) => (
   <div>
      <header className="page-header">
		<h3>购物车</h3>
	</header>
	
	<div className="contaniner fixed-contb">
		<section className="shopcar">
			<div className="shopcar-checkbox">
				{/* <label for="shopcar" onselectstart="return false"></label> */}
				<input type="checkbox" id="shopcar"/>
			</div>
			<figure><img src="./images/shopcar-ph01.png"/></figure>
			<dl>
				<dt>超级大品牌服装，现在买只要998</dt>
				<dd>颜色：经典绮丽款</dd>
				<dd>尺寸：L</dd>
				<div className="add">
					<span>-</span>
					<input type="text" defaultValue="3" />
					<span>+</span>
				</div>
				<h3>￥653.00</h3>
				<small><img src="./images/shopcar-icon01.png"/></small>
			</dl>
		</section>
		<div style={{"marginBottom":"16%"}}></div>
		
	</div>
   </div>
);

export default Shopcar