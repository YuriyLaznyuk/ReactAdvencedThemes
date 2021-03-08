// const action={type:'?', payload:'?'};
 const defaultState={users:[]};
export function usersReducer(state=defaultState,action) {
    switch (action.type) {
        case 'addUser':
            return {...state, users:state.users.concat(action.payload)}
        case 'deleteUsers':
            return {...state, users: state.users.filter(
                item=>item.id!==action.payload
                )}
        default:
            return state

    }

}