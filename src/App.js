import React, { PureComponent } from 'react'

import configureStore from 'store/configureStore.dev'
import rootSaga from 'sagas/rootSaga'
import { Provider } from 'react-redux'

import Routes from 'utils/routes'
import './App.scss'

const store = configureStore(window.__INITIAL_STATE__)
store.runSaga(rootSaga)

class App extends PureComponent {

  render = () => (
    <Provider store={store}>
      <Routes />
    </Provider>
  )

}

export default App
