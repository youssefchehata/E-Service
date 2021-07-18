import React, {useState} from 'react';

import {
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import colors from '../config/colors';

import routes from '../router/routes';



function Login({navigation}) {
  //   const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');



  const signin =async (username, password) => {

  navigation.navigate(routes.ACCEUIL)
  };

  return (
    
    <View style={styles.container}>
      <View style={{paddingBottom: '5%'}}>
        <Image
          style={styles.logo}
          source={require('../assets/images.jpeg')}
        />
      </View>

      <KeyboardAvoidingView style={{width: '90%'}} >
        <TextInput
          color={colors.primary}
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor={colors.primary}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder="Password"
          placeholderTextColor={colors.primary}
          secureTextEntry
          value={password}
        />
        <View style={{alignSelf: 'center'}}>
          {/* <ErrorMessage
            error="Invalid email ou password."
            visible={loginFailed}
          /> */}
        </View>
      </KeyboardAvoidingView>
      <View style={{paddingTop: '15%', width: '85%'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#2196F3',
            borderColor: '#2196F3',
            borderWidth: 1.5,
            borderRadius: 20,
          }}
          onPress={() => {
            signin(email, password);
          }}

          //  disabled={username.length<= 0 || password.length<= 0}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'white',
              letterSpacing: 2,
              alignSelf: 'center',
              paddingVertical: '5%',
            }}>
            S'IDENTIFIER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    fontWeight: 'bold',
    borderRadius: 10,
    height: 60,
    margin: 12,
    borderWidth: 1,
    letterSpacing: 1,
    borderColor: colors.blue,
    color: colors.primary,
    backgroundColor: colors.lightBlue,
  },
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default Login;
