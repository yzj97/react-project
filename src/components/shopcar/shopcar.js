import React,{Component}from 'react';
import connect from 'react-redux/es/connect/connect';
import style from './shopcar.module.css'
import * as types from "../../store/types";

class Shopcar extends Component{
	constructor(){
		super()
	}
	render() {	
		console.log(this.props.list)	
		return(
<div>
      <header className="page-header">
		<h3>购物车</h3>
	</header>
	<ul className={style.contaniner}>	
	{this.props.list.map((item,index)=>(
		<li className={style.shopcar} key={index}>
		<div className={style.checkbox}></div>
			<div className={style.img} >
			   <img src={item.url}/>
			</div>
			<dl>
				<dt>{item.title}</dt>
				<dd>颜色：{item.color}</dd>
					<dd>尺寸：{item.size}</dd>
				<div className={style.add}>
						<span onClick={this.props.redValue.bind(null,item)}>-</span>
						<p className='input'>{item.number}</p>
					<span onClick={this.props.addValue.bind(null,item)}>+</span>
					</div>
					<h3>{item.price}</h3>
		 			<small onClick={this.props.del.bind(null,item)}><img src="./images/shopcar-icon01.png"/></small>
			</dl>
		</li>
		
	))}	
	</ul>
   </div>
		)
	}
}
	
const initMapStateToProps = state =>({
	list:state.buycar
})

const initMapDispatchToProps = dispatch => ({
	del:(del)=>{
		dispatch({
			type:types.REMOVE_ITEM,
			payload:del
		})	
	},
	addValue:(item)=>{
		dispatch({
			type:types.ADD_NUMBER,
			payload:item
		})	
	},
	redValue:(item)=>{
		dispatch({
			type:types.RED_NUMBER,
			payload:item
		})	
	},


})


export default connect(
	initMapStateToProps,
   initMapDispatchToProps
)(Shopcar)