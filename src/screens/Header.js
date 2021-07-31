import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import colors from '../config/colors';
import routes from '../router/routes';
import {useDispatch, useSelector} from 'react-redux';
import { SignOut } from '../store/actions/auth_user';
const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  let titleNav = route.name;
  return (
    <View style={styles.container}>
      <Icon
        style={styles.icon}
        name="home"
        size={25}
        color={colors.primary}
        onPress={() => navigation.navigate(routes.ACCEUIL)}
      />
      <Icon
        style={styles.icon}
        name="sign-in"
        size={25}
        color={colors.primary}
        onPress={() => navigation.navigate(routes.LOGIN)}
      />

      {/* <Icon
        style={styles.icon}
        name="cart-plus"
        size={25}
        color={colors.primary}
        // onPress={() => navigation.navigate(routes.LOGIN)}
      /> */}
      {/* <Icon
        style={styles.icon}
        name="trash"
        size={25}
        color={colors.primary}
        // onPress={() => navigation.navigate(routes.LOGIN)}
      /> */}
      <Icon
        style={styles.icon}
        name="shopping-cart"
        size={25}
        color={colors.primary}
        onPress={() => navigation.navigate(routes.BASKET)}
      />
      {/* <Icon
        style={styles.icon}
        name="plus-circle"
        size={25}
        color={colors.primary}
        // onPress={() => navigation.navigate(routes.LOGIN)}
      /> */}
      {/* <Icon
        style={styles.icon}
        name="eye"
        size={25}
        color={colors.primary}
        // onPress={() => navigation.navigate(routes.LOGIN)}
      /> */}


<Icon
        style={styles.icon}
        name="sign-out"
        size={25}
        color={colors.primary}
        onPress={() =>
          dispatch(
            SignOut( () => {
              // navigation.navigate(routes.LOGIN);
              alert("sigOut")
            }),
          )
        }
      />
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  // icon:{marginHorizontal:5}
});
