import React ,{Component}from 'react';
import {Route,Redirect} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";

const Authcar = ({ component: Component,auth, ...rest }) => (
  <Route {...rest} render={props =>
    auth ?
      <Component {...props} />
      : <Redirect to="/tologin" />
  }
  />
);


const initMapStateToProps=state=>({
  auth:state.user.auth
});
const initMapDispatchToProps=dispatch=>({
});


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Authcar);