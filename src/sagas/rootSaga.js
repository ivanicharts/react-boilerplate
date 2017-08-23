import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

import { getMyIpWatcher } from './saga'

export default function* rootSaga () {
  yield all([
    getMyIpWatcher()
  ])
}
