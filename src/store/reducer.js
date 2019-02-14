import * as types from './types'


const reducer = (state,{type,payload}) => {
    
    switch(type) {
        case types.VIEW_APPFOOTER:
        return {
            ...state,
            bAppfooter:payload
        };
        case types.VIEW_LOADING:
        return {
            ...state,
            bLoading:payload
        };
        case types.UPDATE_HOME:
        return{
            ...state,
            home:payload
        };
        case types.UPDATE_LIST:
        return{
            ...state,
            list:payload
        };
        case types.UPDATE_DETAIL:
        return{
            ...state,
            detail:payload.data[payload.id - 1]
        };
        case types.CHECK_USER:
        let bl = {auth:false}
        if(payload.data){
            let list = payload.data
            console.log(list)
            let username = payload.username
            let password = payload.password
              list.forEach((item,index)=>{
                  if(item.data.username == username && item.data.password == password){
                     bl = list[index]
                     return null
                  }
              });
        }else{
            bl=payload
        }
        
          return {
            ...state,
            user:bl
          }
       default:
          return state

    }

};

export default reducer