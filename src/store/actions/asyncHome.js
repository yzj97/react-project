import * as types from '../types';

const asyncHome=({type,url,start,count,id})=>(dispatch,getState)=>{

  dispatch({type:types.VIEW_LOADING,payload:true});
//  console.log(url)
  fetch(
    url,
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:types.VIEW_LOADING,payload:false});
      if (id){
        dispatch({
          type:type,
          payload:{data,id}
        })
      } else {
        dispatch({type:type,payload:data})
      }

    }
  )
};


export default asyncHome;