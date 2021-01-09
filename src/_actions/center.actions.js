// actions => operation, kind of object 
// component => dispatch(action) => reducer(modify state) => update in store => component
/*
we pass object as action 
special in real scenario we pass function instead of object => redux-thunk(Middleware)
*/
import {userConstants} from '../_constants/user.constants'

export const createCenter=(center)=>{
    return (dispatch)=>{
        /*
        1. request => done
        2. success
        3. fail
        */
       dispatch({ type: userConstants.CREATE_CENTER_REQUEST })  // reducer
       
       fetch('http://localhost:3001/center', {
           method:'POST',
           headers : { 'Content-Type':'application/json'},
           body : JSON.stringify(center)
       }).then(response=>{
            console.log(response)
            dispatch({ type: userConstants.CREATE_CENTER_SUCCESS })

       }) 
       .catch(error=>{
            console.log(error)
            dispatch({ type: userConstants.CREATE_CENTER_FAIL })
       })  

    }
}