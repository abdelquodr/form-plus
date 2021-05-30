import axios from "axios"

export const getPost = (page) => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_POST_BEGINS', loading: true })

        axios.get(`https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`)
       .then( res => {
        return dispatch(getResult( 'FETCH_POST_SUCCESS',  res.data))
       })
     .catch(err => {
                dispatch(getResult('FETCH_POST_ERROR', err))
            } )
    } 
}


const getResult = ( actionType, payload) => {
    return {
         type: actionType, post: payload 
    }
}