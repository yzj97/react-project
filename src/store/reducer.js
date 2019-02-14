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
        case types.UPDATE_DETAIL:
        return{
            ...state,
            detail:payload.data[payload.id - 1]
        };
        case types.CHECK_USER:
        return {
            ...state,
            user:payload
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
        default:
          return state

    }

};

export default reducer