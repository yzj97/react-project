import React,{Component} from 'react'


import Appfooter from '../common/appfooter/Appfooter';
import Address from './address/address'
import Error from '../common/error/Error';
import Home from './home/home';
import Lodding from '../common/lodding/lodding';
import Assess from './assess/assess';
import Assort from './assort/assort'
import Buy from './buy/buy';
import Datum from './datum/datum';
import Detail from './detail/detail'
import Goaddress from './go-address/go-address'
import  Goorder from './go-order/go-order'
import Goassess from './go-assess/go-assess'
import Integral from './integral/integral'
import List from './list/lsit'
import Login from './login/login'
import Mycollect from './mycollect/mycollect'
import Namechange from './namechange/namechange'
import None from './none/none';
import Order from './order/order';
import Reg from './reg/reg';
import Shopcar from './shopcar/shopcar';
import User from './user/user'

import {Route,Redirect,Switch} from 'react-router-dom';
import Auth from "../guard/Auth";
import {connect} from 'react-redux'
import * as types from '../store/types'

class App extends Component{
    
    componentWillReceiveProps(nextProps){
      let path = nextProps.location.pathname;
       this.watchRouter(path)

     
    }
    watchRouter(path){
      let {viewAppfooter}=this.props;
      if(/home|assort|shopcar|user/.test(path)){
        viewAppfooter(true)
      }
     if(/address|assess|buy|datum|detail|goaddress|goassess|integral|list|login|mycollect|namechange|none|order|reg|error/.test(path)){
        viewAppfooter(false)
      }
    }
    componentDidMount(){
      let path = this.props.location.pathname;
      this.watchRouter(path)
    }
    render(){
      let {bAppfooter,bLoading} = this.props;
        return (
          <>
            {bLoading && <Lodding/>}
            <Switch>
              <Route path="/home" component={Home} />
              <Route path='/address' component={Address}/>
              <Route path="/assess" component={Assess} />
              <Route path="/assort" component={Assort} />
              <Route path='/buy' component={Buy}/>
              <Route path="/datum" component={Datum} />
              <Route path="/detail/:id" component={Detail} />
              <Route path="/goaddress" component={Goaddress} />
              <Route path='/goorder' component={Goorder}/>
              <Route path="/goassess" component={Goassess} />
              <Route path="/integral" component={Integral} />
              <Route path="/list" component={List} />
              <Route path='/login' component={Login}/>
              <Route path="/mycollect" component={Mycollect} />
              <Route path="/namechange" component={Namechange} />
              <Route path="/none" component={None} />
              <Route path='/order' component={Order}/>
              <Route path='/reg' component={Reg}/>
              <Route path='/shopcar' component={Shopcar}/>
              <Auth path='/user' component={User}/>
              <Redirect exact from="/" to="/home" />
              <Route component={Error} />
            </Switch>
            {bAppfooter && <Appfooter/>}
          </>
        )
      }
}

const initMapStateToProps=state=>({
  bAppfooter:state.bAppfooter,
  bLoading:state.bLoading,
});
const initMapDispatchToProps=dispatch=>({
  viewAppfooter:(bl)=>dispatch({type:types.VIEW_APPFOOTER,payload:bl})
});


export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App);




