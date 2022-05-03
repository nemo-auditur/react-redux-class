// Source of truth
let initialState = {
    count : 0
}

// You never modify directly your state
// You take the last state of state
// and add your modification to it
const counter = (state = initialState, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count -1}
        case 'RESET':
            return {...state, count: 0}
        default:
            return state
    }
} 

export default counter