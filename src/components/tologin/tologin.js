import React,{Component}from 'react';
import {Link} from 'react-router-dom'
class Tologin extends Component{

      render(){
          return(
              <>
              <header className="page-header">
		        <h3>购物车</h3>
	         </header>
             <div style={{"paddingTop":'16%',"textAlign":'center',"fontSize":'1.7em'}}>请先登录,<Link to="/login">跳转</Link></div>
              </>
          )
      }
}
export default Tologin