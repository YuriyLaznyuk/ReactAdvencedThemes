const defaultState={
 customers:[]
}

const add_customer='add_customer';
const remove_customer='remove_customer';


export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case add_customer:
            // return {...state, customers: [...state.customers, action.payload]}
            return {...state, customers: state.customers.concat(action.payload)}

        case remove_customer:
            return {...state, customers: state.customers.filter(customer=>
                    customer.id!==action.payload)}


        default:
            return state

    }
}
export function addCustomerAction(payload) {
return ({type:add_customer,payload})
}

export function removeCustomerAction(payload) {
    return ({type:remove_customer,payload})
}
