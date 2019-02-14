import React from 'react';

const Goaddress = (props) => (
   <div>
      <header className="top-header fixed-header">
		<a className="icona" href="javascript:history.go(-1)">
				<img src="./images/left.png"/>
			</a>
		<h3>地址管理</h3>
			
			<a className="text-top" >
			</a>
	</header>
	
	<div className="contaniner fixed-conta">
		<form action="" method="post" className="change-address" id="save">
			<ul>
				<li>
					<label className="addd">收货人：</label>
					<input type="text" defaultValue="" required="required"/>
				</li>
				<li>
					<label className="addd">手机号：</label>
					<input type="tel" defaultValue="" required="required"/>
				</li>
				<li>
					<label className="addd">所在地区：</label>
					<select>
						<option>安徽省</option>
						<option>安徽省</option>
						<option>安徽省</option>
					</select>
					<select>
						<option>安徽省</option>
						<option>安徽省</option>
						<option>安徽省</option>
					</select>
					<select>
						<option>安徽省</option>
						<option>安徽省</option>
						<option>安徽省</option>
					</select>
				</li>
				<li>
					<label className="addd">详细地址：</label>
					<textarea required="required"></textarea>
				</li>
			</ul>
			
			<ul>
				<li className="checkboxa">
					<input type="checkbox" id="check"/>
					<label className="check">设置为默认地址</label>
				</li>
			</ul>
			<ul>
				<li>
					<h3>删除此地址</h3>
				</li>
			</ul>
			<input type="submit" defaultValue="保存" />
		</form>
	</div>
   </div>
);

export default Goaddress