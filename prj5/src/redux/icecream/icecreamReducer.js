import { BUY_ICE } from "./icecreamTypes"; 
//import a named export as a property of an object

const initialState = {
    numIce: 10,

}

const icecreamReducer =  (state = initialState,action) => {
    switch(action.type){
        case BUY_ICE:
            return {
                ...state,
                numIce: state.numIce-1
            }
            default: return state
    }
}

export default icecreamReducer
