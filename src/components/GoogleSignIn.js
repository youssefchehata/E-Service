import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Auth } from '../../Setup';

const GoogleSignIn = () => {
  const [user, setUser] = React.useState();
 

  const onAuthStateChanged = user => {
    // alert(user);
    console.log('googlesigninn', user);
    setUser(user);
  };

  React.useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);




     const onGoogleButtonPress  =async () => {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
    
      // Create a Google credential with the token
      const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
    
      // Sign-in the user with the credential
      return Auth().signInWithCredential(googleCredential);
    }
    return (
        <Button
      title="Google Sign-In"
      // onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
      onPress={() => onGoogleButtonPress()}
    />
    )
}

export default GoogleSignIn

const styles = StyleSheet.create({})
