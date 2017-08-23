// import { delay } from 'redux-saga'
import { all } from 'redux-saga/effects'

import { getMyIpWatcher } from './saga'

export default function* rootSaga () {
  yield all([
    getMyIpWatcher()
  ])
}
