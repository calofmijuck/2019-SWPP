import { take, put, call, fork, takeEvery } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'


const url = 'http://18.218.68.157:8000/meetings/'
// const url = 'http://127.0.0.1:8000/meetings/'

export function* postMeeting(sw, tw, usr, pass) {
    try {
        const auth = btoa(usr + ':' + pass)
        const headerParams = {
            Authorization: 'Basic ' + auth,
            'Accept': 'application/json, application/xml, text/plain, text/html, */*',
            'Content-Type': 'application/json; charset=utf-8'
        }
        const data = yield call(api.post, url, {sinceWhen: sw, tilWhen: tw}, {headers: headerParams})
    } catch (error) {
        var s = error.toString()
        s = Number(s.substring(7, 10))
        if(s == 403) {
            alert("Authentication is not done correctly. Please login again.")
        } else if(s == 500) {
            alert("Illegal format of time")
        }
        console.log(error)
    }
}

export function* fetchData() {
    try {
        const data = yield call(api.get, url)
        console.log(data)
        yield put({type: "FETCH_SUCCEEDED", data})
    } catch (error) {
        console.log("Fetch Failed")
    }
}

export function* deleteData(id, usr, pass) {
    try {
        const auth = btoa(usr + ':' + pass)
        const headerParams = {
            Authorization: 'Basic ' + auth,
            'Accept': 'application/json, application/xml, text/plain, text/html, */*',
            'Content-Type': 'application/json; charset=utf-8'
        }
        yield call(api.delete, url + id + '/', {headers: headerParams})
        console("Delete Success!")
    } catch (error) {
        var s = error.toString()
        s = Number(s.substring(7, 10))
        if(s == 403) {
            alert("Authentication is not done correctly. Please login again.")
        }
        console.log(error)
    }
}

export function* watchPostMeetingRequest() {
    while (true) {
	const { sw, tw, usr, pass } = yield take(actions.POST_MEETING_REQUEST)
	yield call(postMeeting, sw, tw, usr, pass)
    }
}


function* watchFetchData() {
    while(true) {
        const { text } = yield take(actions.FETCH_MEETINGS)
        yield call(fetchData)
    }
}

function* watchDelete() {
    while(true) {
        const { id, usr, pass } = yield take(actions.DEL_MEETING)
        yield call(deleteData, id, usr, pass)
    }
}

export default function* () {
    yield fork(watchPostMeetingRequest)
    yield fork(watchFetchData)
    yield fork(watchDelete)
}
