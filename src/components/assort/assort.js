import React from 'react';

const Assort = (props) => (
   <div>
      <header className="page-header fixed-header">
		<input type="search"  /> 
		<span>
			<img src="./images/serach.png"/>
		</span>
	</header>
	
	<div className="contaniner fixed-cont">
		<aside className="assort">
			<ul>
				<li className="active">
					<img src="./images/classify01.png"/>
					<span>母婴用品</span>
				</li>
				<li>
					<img src="./images/classify02.png"/>
					<span>女装正品</span>
				</li>
				<li>
					<img src="./images/classify03.png"/>
					<span>男装正品</span>
				</li>
				<li>
					<img src="./images/classify04.png"/>
					<span>内衣服饰</span>
				</li>
				<li>
					<img src="./images/classify05.png"/>
					<span>化妆品</span>
				</li>
				<li>
					<img src="./images/classify06.png"/>
					<span>居家百货</span>
				</li>
				<li>
					<img src="./images/classify07.png"/>
					<span>时尚智能</span>
				</li>
				<li>
					<img src="./images/classify08.png"/>
					<span>营养保健</span>
				</li>
				<li>
					<img src="./images/classify09.png"/>
					<span>女鞋箱包</span>
				</li>
			</ul>
		</aside>
		
		<section className="assort-cont">
			<figure>
				<a href="javascript:;">
					<img src="./images/classify-ph01.png"/>
				</a>
			</figure>
			<dl>
				<dt>宝宝营养</dt>
				<dd>
				<a href="javascript:;">
						<img src="./images/classify-ph02.png"/>
						<p>DNA</p>
					</a>
				</dd>
				<dd>
				<a href="javascript:;">
						<img src="./images/classify-ph03.png"/>
						<p>钙剂</p>
					</a>
				</dd>
				<dd>
				<a href="javascript:;">
						<img src="./images/classify-ph02.png"/>
						<p>DNA</p>
					</a>
				</dd>
				<dd>
				<a href="javascript:;">
						<img src="./images/classify-ph03.png"/>
						<p>钙剂</p>
					</a>
				</dd>
			</dl>
			<dl>
				<dt>妈妈专区</dt>
				<dd>
					<a href="javascript:;">
						<img src="./images/classify-ph04.png"/>
						<p>DNA</p>
					</a>
				</dd>
				<dd>
					<a href="javascript:;">
						<img src="./images/classify-ph05.png"/>
						<p>钙剂</p>
					</a>
				</dd>
				<dd>
					<a href="javascript:;">
						<img src="./images/classify-ph04.png"/>
						<p>DNA</p>
					</a>
				</dd>
				<dd>
					<a href="javascript:;">
						<img src="./images/classify-ph05.png"/>
						<p>钙剂</p>
					</a>
				</dd>
			</dl>
		</section>
	</div>
   </div>
);

export default Assort