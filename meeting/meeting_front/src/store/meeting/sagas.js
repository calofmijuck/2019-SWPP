import { take, put, call, fork, takeEvery } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'


const url = 'http://18.218.68.157:8000/meetings/'
// const url = 'http://127.0.0.1:8000/meetings/'

export function* postMeeting(sw, tw) {
    console.log("Post")
	console.log(sw, tw)
    const data = yield call(api.post, url, {sinceWhen: sw, tilWhen: tw})
    console.log(data)
    // return data;
}

export function* fetchData() {
    try {
        console.log("Calling get")
        const data = yield yield call(api.get, url)
        console.log(data)
        yield put({type: "FETCH_SUCCEEDED", data})
    } catch (error) {
        console.log("Fetch Failed")
    }
}

export function* watchPostMeetingRequest() {
    while (true) {
	const { sw, tw } = yield take(actions.POST_MEETING_REQUEST)
	yield call(postMeeting, sw, tw)
    }
}


function* watchFetchData() {
    while(true) {
        const { text } = yield take(actions.FETCH_MEETINGS)
        yield call(fetchData)
    }
}

export default function* () {
    yield fork(watchPostMeetingRequest)
    yield fork(watchFetchData)
}
