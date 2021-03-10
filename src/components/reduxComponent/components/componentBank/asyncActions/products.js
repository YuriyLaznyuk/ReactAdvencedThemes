export function fetchProducts() {
    // function return dispatch
return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(json => dispatch({type:"addManyProduct", payload:json}))
        .then(json => dispatch({type:"addProduct", payload:json}))

}
}

// redux thunk allows you to use inside third-party functions dispatch