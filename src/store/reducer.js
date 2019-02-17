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
        //清空购物车  
      case types.REMOVE_ALL:
         return Object.assign({},state,{
            buyCar:[]
         });
     
          //去除一个商品
          case types.REMOVE_ITEM:
          let rearr=[...state.buycar];
          rearr.forEach((item,index)=>{
            if(item.id===payload.id){
                rearr.splice(index,1);
            }
          });
          return {
              ...state,
              buycar:rearr
          }

          //添加购物车
          case types.ADD_ITEM:
          let find=false;
          let arr=[...state.buycar];
          console.log(payload)

            arr.forEach((item,index)=>{
                if(item.id===payload.id){
                find=true;
                item.number++;
                }
            });
            if(!find){
                payload.number=1;
                arr.push(payload);
            }
            return {
                ...state,
                buycar:arr
            }
            case types.ADD_NUMBER:
              let addarr=[...state.buycar]
              addarr.forEach((item,index)=>{
                  if(item.id===payload.id){
                      item.number++
                    //   arr.splice(index,1,item)
                  }
              })
              return {
                  ...state,
                  buycar:addarr
              }
              case types.RED_NUMBER:
              let redarr = [...state.buycar]
              redarr.forEach((item,index)=>{
                if(item.id===payload.id){
                     let a = item.number--
                    if(a==1){
                        item.number=0
                    }
                  //   arr.splice(index,1,item)
                }
              })
              return {
                ...state,
                buycar:redarr
            }
       default:
          return state

    }

};

export default reducer