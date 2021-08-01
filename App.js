import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {extendTheme, NativeBaseProvider} from 'native-base';
import AuthScreen from './src/firebase/firebaseTestScreen/AuthScreen';
import RealtimeDBScreen from './src/firebase/firebaseTestScreen/RealtimeDBScreen';
import Lists from './src/firebase/firebaseTestScreen/Lists';
import StorageScreen from './src/firebase/firebaseTestScreen/CloudStorageScreen';
import CloudFireStore from './src/firebase/firebaseTestScreen/CloudFireStore';
import Navigation from './src/router/Navigation'
const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({colors: newColorTheme});
const App = () => {
  return (
  <Navigation/>
    // <ScrollView>
    //   <NativeBaseProvider theme={theme}>
    //     <AuthScreen />
    //     <RealtimeDBScreen />
    //     <Lists />
    //     <StorageScreen />
    //     <CloudFireStore />
    //   </NativeBaseProvider>
    // </ScrollView>
  );
};

export default App;
