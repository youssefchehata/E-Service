/**
 * @format
 */

 import React from 'react';
 import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Setup from './Setup';
import { configureStore } from './src/store/configureStore';



const Redux = () => (
    <Provider store={configureStore}>
      <Setup />
    </Provider>
  );
AppRegistry.registerComponent(appName, () => Redux);
