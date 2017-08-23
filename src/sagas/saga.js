import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// export function* helloSaga() {
//   console.log('Saga is working');
// }

const getIp = () => axios.get('http://ip.jsontest.com/').then(({ data }) => data)

export function* getMyIp () {
  try {
    const { ip } = yield call(getIp)
    yield put({type: 'IP_SUCCESS', ip})
  } catch (e) {
    yield put({type: 'IP_FAIL', e})
  }
}

export function* getMyIpWatcher () {
  yield takeEvery('IP_REQUEST', getMyIp)
}