import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { extendTheme, NativeBaseProvider } from 'native-base';
import AuthScreen from './src/firebase/firebaseTestScreen/AuthScreen'
import RealtimeDBScreen from './src/firebase/firebaseTestScreen/RealtimeDBScreen'
import Lists from './src/firebase/firebaseTestScreen/Lists';
import StorageScreen from './src/firebase/firebaseTestScreen/CloudStorageScreen';
import CloudFireStore from './src/firebase/firebaseTestScreen/CloudFireStore';
const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({ colors: newColorTheme });
const App = () => {


  return (
    <ScrollView>
     <NativeBaseProvider theme={theme}>
            {/* <Text>app</Text> */}



       <AuthScreen/>
      <RealtimeDBScreen/> 
      <Lists/>
      <StorageScreen/>
      <CloudFireStore/>



      {/* <Text>{ firebaseConfig()  }</Text> */}

      </NativeBaseProvider>
  
    </ScrollView>
  )
}

export default App
