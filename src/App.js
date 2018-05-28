import React, {Component} from 'react';
import { connect, Provider } from 'react-redux';
import configureStore from './store/store'
import { AppNavigator } from './AppNavigator'

const store = configureStore({});

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const App = () => {
  return(
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  )
}

export default App