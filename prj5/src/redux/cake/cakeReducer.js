import { BUY_CAKE } from "./cakeTypes"; 
//import a named export as a property of an object

const initialState = {
    numCakes: 10,

}

const cakeReducer =  (state = initialState,action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numCakes: state.numCakes-1
            }
            default: return state
    }
}

export default cakeReducer
