export  function fetchUser() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(responce=>responce.json())
            .then(json=>dispatch({type:"addUser", payload:json}))

    }

}