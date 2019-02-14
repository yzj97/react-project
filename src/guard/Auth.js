import React from 'react';
import {Route,Redirect} from 'react-router-dom';
//异步条件2
class Auth extends React.Component{
  constructor(props){
    super(props);

    this.state={
      hasAuth:false,
      auth:false,
      data:null
    }

  }
  componentDidMount(){
    fetch(
      `/data/user.json`
    ).then(
      res=>res.json()
    ).then(
      res=>{
        this.setState({auth:res[0].auth,hasAuth:true,data:res[0].data})
      }
    )
  }
  render(){
    
    let {component:Component, ...rest}=this.props;
  

    if (!this.state.hasAuth) return null;
    return <Route {...rest} render={(props)=>
      this.state.auth ? //data == 预载数据
        <Component data={this.state.data} {...props} /> :
        <Redirect to="/login"/>
    } />
    
  }
}



export default Auth;