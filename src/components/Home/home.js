import React,{Component}from 'react';
import {Link} from 'react-router-dom'
import ReactSwipe from 'react-swipe';
import './home.css'
import * as types from "../../store/types";
import asyncHome from "../../store/actions/asyncHome";
import {connect} from 'react-redux'


class Home extends Component{
  constructor(props){
    super();
    props.get();
  }

	render(){
		let {home}=this.props;
		return(
            <div>
      <header className="page-header fixed-header">
		<h3>商城</h3>
	</header>
	
	<div className="contaniner fixed-contb" style={{'paddingTop':'56px'}}>
	<ReactSwipe
        className="carousel"
		swipeOptions={{ 
			continuous: true,
			auto:3000
		 }}
      >
        <div className='swipe-img'><img src="images/index-ban01.png"/></div>
        <div className='swipe-img'><img src="images/index-ban02.png"/></div>
        <div className='swipe-img'><img src="images/index-ban03.png"/></div>
      </ReactSwipe>
	  {
		  home.map((item,index)=>(
			  
			  <section className='shop' key={index}>
			   <h3>
			     <Link to={"/list"}>
				 {item.pinlei}
				 <span><img src="./images/right.png"/></span>
				 </Link>
			   </h3>
			   <dl>
				   {item.list.map((sitem,sindex)=>(
					   <dd key={sindex}>
                       <Link to={"/list"}>
					      <img src={sitem.url}/>
						  <b>{sitem.title}</b>
					   </Link>
					   </dd>
				   ))}
			   </dl>
			  </section>
		  ))
	  }
	</div>
   </div>
		)
   }
};

const initMapStateToProps = state =>({
	home:state.home
});

const initMapDispatchToProps = dispatch => ({
	get:()=>dispatch(asyncHome({
		url:`/data/index.data`,
		type:types.UPDATE_HOME
	})
	)
})

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Home);