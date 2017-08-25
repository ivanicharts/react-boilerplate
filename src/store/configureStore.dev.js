import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware, { END } from 'redux-saga'

import rootReducer from 'reducers'

export default function configureStore(initialState) {
  const sagaMiddlware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddlware,
        createLogger()
      )
    )
  )

  if (module.hot) {
    module.hot.accept(
      '../reducers',
      () => store.replaceReducer(require('../reducers').default)
    )
  }
  store.runSaga = sagaMiddlware.run
  store.close = () => store.dispatch(END)
  return store
}
