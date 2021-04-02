import {put, takeEvery} from "redux-saga/effects"
import {asyncAddCount, asyncMinusCount, methodAddCount, methodMinusCount} from "../store/buttonReducer";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))

}

function* addWorker() {
    yield delay(1000);
    yield put(methodAddCount())

}


function* minusWorker() {
    yield delay(1000);
    yield put(methodMinusCount())

}

//passing the async action type and worker
export function* countWatcher() {
    yield takeEvery(asyncAddCount, addWorker)
    yield takeEvery(asyncMinusCount, minusWorker)
}