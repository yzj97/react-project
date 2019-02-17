import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import ReactSwipe from 'react-swipe';
import './detail.css'
import * as types from "../../store/types";
import asyncHome from "../../store/actions/asyncHome";
import {connect} from 'react-redux'
// import querystring from 'query-string'

class Detail extends Component{

	constructor(props){
		super()
		this.state={
			list:[]	
		}
  }
	componentDidMount(){
		let id=this.props.match.params.id-0;
		this.props.get(id)	
	  }
	  componentWillMount(){
		fetch(
			'/data/pinglun.data'
		).then(
			res=>res.json()
		).then(
			data=>{
				this.setState({
					list:data
				})
			}
		)
	  }

    render(){
		let detail = this.props.detail;
		
        return(
        <>
     	<header className="detail-header fixed-header">
		<a href="javascript:history.go(-1)"><img src="/images/detail-left.png"/></a>
		
		<NavLink to={'/shopcar'} className="right"><img src="/images/shopbar.png"/></NavLink>
	   </header>
	
	
	<div className="contaniner fixed-contb">
		<section className="detail">
		<ReactSwipe
        className="carousel"
        swipeOptions={{ 
			continuous: true,
			auto:3000,
		}}
      >
        <div className='swipe-image'><img src="/images/detail-ban02.png"/></div>
        <div className='swipe-image'><img src="/images/detail-ban01.png"/></div>
        <div className='swipe-image'><img src="/images/detail-ban03.png"/></div>
		<div className='swipe-image'><img src="/images/detail-ban04.png"/></div>
      </ReactSwipe>
			<dl className="jiage">
				<dt>
					<h3>{detail.title}</h3>
					<div className="collect">
						<img src="/images/detail-heart-hei.png"/>
						<p>收藏</p>
					</div>
				</dt>
				<dd>
					<b>{detail.price}</b>
					<del>{detail.oldprice}</del>
					<input type="button" value="￥10.00" readOnly />
					<small>+356积分</small>
				</dd>
			</dl>
			
			<div className="chose">
				<ul>
					<h3>颜色</h3>
					<li>
						黑色
					</li>
					<li className="chose-active">
						粉色
					</li>
					<li>
						灰色
					</li>
					<li>
						红色
					</li>
				</ul>
				<ul>
					<h3>尺寸</h3>
					<li>
						L
					</li>
					<li className="chose-active">
						XL
					</li>
					<li>
						XXL
					</li>
				</ul>
			</div>
			
			<a href="javascript:;" className="seven">
				<b>7</b>天无理由退换货
			</a>
			
			<ul className="same">
				<a href="javascript:;">
					<span>
						同类推荐
					</span>
					<li className="one">
						<img src="/images/detail-pp01.png"/>
						<p>￥188.00</p>
					</li>
					<li>
						<img src="/images/detail-pp02.png"/>
						<p>￥188.00</p>
					</li>
					<li>
						<img src="/images/detail-pp03.png"/>
						<p>￥188.00</p>
					</li>
					<li>
						<img src="/images/detail-pp04.png"/>
						<p>￥188.00</p>
					</li>
				</a>
			</ul>
			
			<article className="detail-article">
				<nav>
					<ul>
						<li>商品详情</li>
						<li className="article-active">评价</li>
					</ul>
				</nav>
				<section className="talkbox">
					<ul className="talk">
					{
						this.state.list.map((item,index)=>(
							<li key={index}>
							<figure><img src="/images/detail-tou.png"/></figure>
							<dl>
								<dt>
									<p>{item.nanme}</p>
									<time>2015.11.17</time>
									<div className='star'>
									    <span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn01.png"/></span>
										<span><img src="/images/detail-iocn001.png"/></span>
										<span><img src="/images/detail-iocn001.png"/></span>
									</div>
								</dt>
								<dd>{item.pinglun}</dd>
								<small>{item.small}</small>
							</dl>
							</li>
						))
					}
					</ul>
				</section>
				
			</article>
		</section>
	</div>
	
	
		<footer className="detail-footer fixed-footer">
			<a href="javascript:;" className="go-car">
				<input type="button" value="加入购物车" onClick={
				 this.props.add.bind(null,detail)
			}/>
			</a>
			<NavLink to={'/buy'} className="buy">
				立即购买
			</NavLink>
		</footer>
    </>
        )
		}
}

const initMapStateToProps=state=>({
	detail:state.detail,
  });
  const initMapDispatchToProps=dispatch=>({
	get:(id)=>{
		dispatch(asyncHome({
			id:id,
			type:types.UPDATE_DETAIL,
			url:`/data/product.data`,
		}))
	 },
	 add:(obj)=>{
      dispatch({
				type:types.ADD_ITEM,
				payload:obj
			})
	 }
    
	 } 
  );
  
  
  export default connect(
	initMapStateToProps,
	initMapDispatchToProps
  )(Detail);