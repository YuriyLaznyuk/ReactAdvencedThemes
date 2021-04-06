import {put, takeEvery, call} from "redux-saga/effects"
import {methodAddPeopleJson, fetchAddPeople} from "../store/peopleReducer";

function fetchPeople() {
    return (
        fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
    )

}

function* fetchPeopleWorker() {
    // call return data promise
    const data = yield call(fetchPeople)
    // const json = yield call(() => new Promise(resolve => resolve(data.json())))
    const json = yield call(() => data.json())
    yield put(methodAddPeopleJson(json))

}

//passing the async action type and worker
// export run()
export function* peopleWatcher() {
    yield takeEvery(fetchAddPeople, fetchPeopleWorker)

}