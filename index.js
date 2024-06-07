import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import './src/utils/helpers/i18next'; // This import works to configure the language.

const MobiCar24 = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => MobiCar24);
