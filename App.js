import React from 'react'
import { View, Text } from 'react-native'
import { extendTheme, NativeBaseProvider } from 'native-base';
import AuthScreen from './src/screens/AuthScreen'
import RealtimeDBScreen from './src/screens/RealtimeDBScreen'
import Lists from './src/screens/Lists';
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
    <>
     <NativeBaseProvider theme={theme}>
            {/* <Text>app</Text> */}
      {/* <AuthScreen/> */}
      {/* <RealtimeDBScreen/> */}
      <Lists/>
      {/* <Text>{ firebaseConfig()  }</Text> */}

      </NativeBaseProvider>
  
    </>
  )
}

export default App
