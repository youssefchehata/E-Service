import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import colors from '../config/colors';
import routes from '../router/routes';
const Header = () => {
  const navigation = useNavigation();
  const route = useRoute();
  let titleNav = route.name;
  return (
    <View>
      <Icon
        name="home"
        size={25}
        color={colors.primary}
        onPress={() => navigation.navigate(routes.LOGIN)}
      />
    </View>
  );
};

export default Header;
