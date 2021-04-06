import {addPeople} from "../store/peopleReducer";

export function actionFetchPeople() {
    return function (dispatch) {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(responce => responce.json())
            .then(json => dispatch({type: addPeople, payload: json}))

    }


}