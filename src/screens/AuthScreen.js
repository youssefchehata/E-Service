import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
// import { Container, Content, Header, Body, Title, ListItem, Text, Left, Icon, Button, Right, Form, Item, Input, Label, NativeBaseProvider,Box } from 'native-base';
import {Auth} from '../../Setup';
import {SignUpUser, SignInUser, SignOutUser} from '../firebase/apiService';

const AuthScreen = () => {
  const [state, setState] = React.useState({
    emailAddress: '',
    password: '',
  });
  const [user, setUser] = React.useState();

  const signUp = () => {
    SignUpUser(state.emailAddress, state.password)
      .then(data => {
        alert(data);
      })
      .catch(error => {
        alert(error);
      });
  };
  const signIn = () => {
    SignInUser(state.emailAddress, state.password)
      .then(data => {
        alert(data);
      })
      .catch(error => {
        alert(error);
      });
  };
  const signOut = () => {
    SignOutUser()
      .then(data => {
        alert(data);
      })
      .catch(error => {
        alert(error);
      });
  };

  const onAuthStateChanged = user => {
    setUser(user);
  };

  React.useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  
  return (
    <View>
      <Text>login</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>log-ou</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="email-address"
        // keyboardType="email-address"
        value={state.emailAddress}
        onChangeText={text => setState({...state, emailAddress: text})}
      />

      <TextInput
        placeholder="password"
        value={state.password}
        onChangeText={text => setState({...state, password: text})}
      />



<TouchableOpacity onPress={signUp}>
        <Text>signUp</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={signIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AuthScreen;
