import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getUsers} from './actions/usersActions'

const App = ()=>{
  const {users=[]} = useSelector(state => {
    console.log(state)
    return state.users
  });

  const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getUsers())
    },[dispatch])

        
      return (
          <div>
              {users.map(u => 
                    <React.Fragment key={u.id}>
                        <h6>{u.name}</h6> 
                    </React.Fragment>
              )}
          </div>
      )
}


export default App
