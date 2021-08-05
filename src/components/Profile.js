import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Auth} from '../../Setup';
import colors from '../config/colors';
// import {useDispatch, useSelector} from 'react-redux';
const Profile = () => {
  // const dispatch = useDispatch();
  // const navigation = useNavigation();

  const [user, setUser] = React.useState();

 

  const onAuthStateChanged = user => {
    setUser(user);
  };

  React.useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [user]);
  if (user) {
    return (
      <View style={{paddingVertical: 30}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: colors.primary,
            letterSpacing: 2,
          }}>
          E-mail: {user?.email}
        </Text>
      </View>
    );
  }
  return null;
};

export default Profile;

const styles = StyleSheet.create({});
