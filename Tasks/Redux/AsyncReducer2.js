let redux = require('redux')
let create = redux.createStore

let initial = {
    loading: false,
    user: [],
    error: ''
}

let FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
let FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
let FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

let fetchRequest = () => {
    return{
        type:FETCH_USER_REQUEST
    }

}

let fetchSuccess = (user) => {
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}

let fetchFailure = (error) => {
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

let reducer = (state = initial, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }

        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                user:action.payload,
                error:''
            }

        case FETCH_USER_FAILURE:
            return{
                loading:false,
                user:[],
                error:action.payload
            }
    }
}

let store = create(reducer)
console.log('Initial', store.getState())
let unsubscribe = store.subscribe(() => {console.log('Update', store.getState())})

store.dispatch(fetchRequest())
store.dispatch(fetchSuccess())
store.dispatch(fetchFailure())

unsubscribe()
