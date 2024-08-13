const { createStore } = require("redux")
const redux = require("redux")
const { createLogger } = require("redux-logger")
const logger = createLogger({})
//action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'
const combineReducers = redux.combineReducers
const applyMiddlware = redux.applyMiddleware

// npm i --save redux-logger


//action creator
function buyCake(){
    return {
        type:BUY_CAKE,
        info:'buycake action'
    }
}

function buyIce(){
    return {
        type:BUY_ICE,
        info:'buycake action'
    }
}

const initialState = {
    numCakes: 10,
    numIcecreams:20
}

const cakeReducer =(state = initialState,action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numCakes:state.numCakes -1
        }
       
        default : return state
    }
}

const iceReducer =(state = initialState,action) => {
    switch(action.type){
       
        case BUY_ICE: return {
            ...state,
            numCakes:state.numIcecreams -1
        }
        default : return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice:iceReducer
})

const store = createStore(rootReducer,applyMiddlware(logger))

//console.log('initial state is',store.getState())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
//console.log('after dispatching state is',store.getState())
