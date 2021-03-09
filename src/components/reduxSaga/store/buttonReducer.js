const defaultCount={count:10};
// const action={type:'?',payload:'?'}
export const addCount='addCount';
export const asyncAddCount='asyncAddCount';
export const minusCount='minusCount';
export const asyncMinusCount='asyncMinusAddCount';


    export function buttonReducer(state=defaultCount,action) {
        switch (action.type) {
            case addCount:
                return {...state, count:state.count+1}

            case minusCount:
                return {...state, count:state.count-1}
            default :
                return state;

        }


    }
export const methodAddCount=()=>({type:addCount})
export const asyncMethodAddCount=()=>({type:asyncAddCount})
export const methodMinusCount=()=>({type:minusCount})
export const asyncMethodMinusCount=()=>({type:asyncMinusCount})