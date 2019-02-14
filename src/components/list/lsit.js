import React,{Component}from 'react';
import {NavLink,Link} from 'react-router-dom'
import * as types from "../../store/types";
import asyncHome from "../../store/actions/asyncHome";
import {connect} from 'react-redux'



class List extends Component{
    constructor(props){
		super();
		props.get();
	  }
	render(){
		let {list} = this.props;
		return(
			<div>
			<header className="top-header fixed-header">
			  <a className="icona" href="javascript:history.go(-1)">
					  <img src="./images/left.png"/>
				  </a>
			  <h3>男装专区</h3>
				  
				  <NavLink className="iconb" to={'/shopcar'}>
					  <img src="./images/shopbar.png"/>
				  </NavLink>
		  </header>
		  
		  <div className="contaniner fixed-conta">
			  <section className="list">
				  <figure><img src="./images/list-ban01.png"/></figure>
				  <div className="search">
					  <input type="search" placeholder="韩版卫衣" />
					  <label><img src="./images/list-search.png"/></label>
				  </div>
				  <nav>
					  <ul>
						  <li>
							  <a href="javascript:;">
								  <span>全部</span>
							  </a>
						  </li>
						  <li className="list-active">
							  <a href="javascript:;">
								  <span>销量</span>
								  <img src="./images/up-red.png"/>
							  </a>
						  </li>
						  <li>
							  <a href="javascript:;">
								  <span>价格</span>
							  </a>
						  </li>
						  <li>
							  <a href="javascript:;">
								  <span>评价</span>
							  </a>
						  </li>
					  </ul>
				  </nav>
				  <ul className="wall">

                      {
						  list.map((item,index)=>(
                               <li className='pic' key={index}>
							      <Link to={{pathname:'/detail/'+item.id}}>
								     <img src={item.url}/>
									 <p>{item.title}</p>
									 <b>{item.price}</b><del>{item.oldprice}</del>
								  </Link>
							   </li>
						  ))
					  }
				  </ul>
			  </section>
		  </div>
		 </div>
		)
	}
	
}

const initMapStateToProps = state =>({
	list:state.list
});

const initMapDispatchToProps = dispatch => ({
	get:()=>dispatch(asyncHome({
		url:`/data/product.data`,
		type:types.UPDATE_LIST
	})
	)
})

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(List);