import {USERS_TYPES} from '../actionTypes'

const initialState = {
    users:[],
    loading:true
}

const usersReducer = (state = initialState, action)=>{
    console.log(state)
    switch(action.type){
        case USERS_TYPES.GET_USERS:
        return {
            ...state,
            users:action.payload,
            loading:false

        }
        default: return state
    }
}
export default usersReducer