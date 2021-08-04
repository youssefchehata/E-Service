import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import colors from '../config/colors';
import routes from '../router/routes';
import {useDispatch, useSelector} from 'react-redux';
import {SignOut} from '../store/actions/auth_user';
import {NavigationDrawerButton} from '../components/drawerMenu/NavigationDrawerButton';
import {Auth} from '../../Setup';
const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  let titleNav = route.name;

  const [user, setUser] = React.useState();

  const onAuthStateChanged = user => {
    setUser(user);
  };

  React.useEffect(() => {
    const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <NavigationDrawerButton navigationProps={navigation} />
      {titleNav != routes.ACCEUIL && (
        <Icon
          style={styles.icon}
          name="home"
          size={25}
          color={colors.primary}
          onPress={() => navigation.navigate(routes.ACCEUIL)}
        />
      )}

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
      {titleNav != routes.BASKET && (
        <Icon
          style={styles.icon}
          name="shopping-cart"
          size={25}
          color={colors.primary}
          onPress={() => navigation.navigate(routes.BASKET)}
        />
      )}
      {/* <Icon
        style={styles.icon}
        name="plus-circle"
        size={25}
        color={colors.primary}
        // onPress={() => navigation.navigate(routes.LOGIN)}
      /> */}
      <Icon
        style={styles.icon}
        name="eye"
        size={25}
        color={colors.primary}
        onPress={() => navigation.navigate(routes.ORDERS)}
      />

      <View>
        {user ? (
          <Icon
            style={styles.icon}
            name="sign-out"
            size={25}
            color={colors.primary}
            onPress={() =>
              dispatch(
                SignOut(() => {
                  // navigation.navigate(routes.LOGIN);
                  alert('sigOut');
                }),
                setUser(),
              )
            }
          />
        ) : (
          <Icon
            style={styles.icon}
            name="sign-in"
            size={25}
            color={colors.primary}
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
        )}
      </View>
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
