import {all} from "redux-saga/effects"
import {countWatcher} from "./countSaga";
import {peopleWatcher} from "./peopleSaga";

//combine watchers
//return run()
export function* globalWatcher() {
yield all([countWatcher(),peopleWatcher()])
}