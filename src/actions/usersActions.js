import {USERS_TYPES} from '../actionTypes'
import httpRequest from '../utils/httpRequest'
export const getUsers = () => async dispatch => {
    
    try{
        const res = await httpRequest({
            url:'/users',
        })
        dispatch( {
            type: USERS_TYPES.GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type:  USERS_TYPES.USERS_ERROR,
            payload: console.log(e),
        })
    }

}