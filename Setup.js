import React, {useEffect} from 'react';
import App from './App';

import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyASs_J51NAqyyQM4z_eFACFxyPT7gBbZ9Q',
  authDomain: 'e-service-2e1c9.firebaseapp.com',
  databaseURL:
    'https://e-service-2e1c9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'e-service-2e1c9',
  storageBucket: 'e-service-2e1c9.appspot.com',
  messagingSenderId: '279739746148',
  appId: '1:279739746148:web:07c052dfe44c94326d9c71',
  measurementId: 'G-FQ1VP9BY8K',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log('firebase', firebase);
}
export  {firebase,Auth,database,storage,firestore}
const Setup = () => {

  return <App />;
};

export default Setup;
