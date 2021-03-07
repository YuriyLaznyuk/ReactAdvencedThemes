// const action={type:"?", action:"?"}
 const defaultProduct={product:[]};
export function productReducer(state=defaultProduct,action) {
    switch (action.type) {
        case "addProduct" :
            return {...state, product: state.product.concat(action.payload)}
        case "delProduct":
            return {...state, product: state.product.filter(
                items=>items.id!==action.payload
                )}
        default:
            return state
    }

}