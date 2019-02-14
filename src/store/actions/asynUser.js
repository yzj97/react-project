import * as types from '../types';


const asynUser=({url,username,password}) => (dispatch,getState)=>{
    dispatch({type:types.VIEW_LOADING,payload:true});
    
     return fetch(
         url,
     ).then(
         res=>res.json()
     ).then(
         data=>{
            dispatch({type:types.VIEW_LOADING,payload:false});
            dispatch({type:types.CHECK_USER,payload:data})
            return data.auth
         }
     )
}

export default asynUser;