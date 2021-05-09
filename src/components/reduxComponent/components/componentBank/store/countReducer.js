 // const action={type:'?', payload:"?"}
const defaultCount={count:1}

// trow action to function
export function countReducer(state=defaultCount,action) {
    switch (action.type) {
        case 'addCount' :
            return {...state, count:state.count + action.payload }
        case'minusCount' :
            return {...state, count: state.count-action.payload}
        default:
            return state
    }


}