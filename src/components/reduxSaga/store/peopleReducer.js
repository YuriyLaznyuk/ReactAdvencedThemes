const defaultState={people:[]}
export const addPeople="addPeople";
export const delPeople="delPeople";
export const fetchAddPeople="fetchAddPeople";

export function peopleReducer(state=defaultState, action) {
switch (action.type) {
    case addPeople:
        return {...state, people:state.people.concat(action.payload)}
    case delPeople:
        return {...state, people:state.people.filter(item=>item.id!==action.payload)}

    default:
        return state

}
}
export const methodAddPeople=(people)=>(
    {type:addPeople,payload:{name:people, id:Date.now()}})

export const methodDelPeople=(people)=>({type:delPeople, payload:people})

//saga
export const methodAddPeopleJson=(json)=>({type:addPeople,payload:json})
export const fetchAddPeopleJson=()=>({type:fetchAddPeople})

