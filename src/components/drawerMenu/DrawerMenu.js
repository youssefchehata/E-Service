import React from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../config/colors';
import routes from '../../router/routes';
import Profile from '../Profile';
import ItemMenu from './ItemMenu';
import { CloseNavigationDrawerButton } from './NavigationDrawerButton';

const DrawerMenu = ({navigation, ...otherProps}) => {
  // console.log(otherProps);
  const List =[{
    id: 2,
    icon: <Icon name="opencart" size={20} color={colors.primary} />,
    route: routes.BASKET,
    title: 'Panier',
  },
  {
    id: 3,
    icon: <Icon name="shopping-cart" size={20} color={colors.primary} />,
    route: routes.ORDERS,
    title: 'Orders',
  },
]

  return (
    <View  style={styles.container} >
      <View style={{alignSelf: 'flex-end'}}>
        <CloseNavigationDrawerButton navigationProps={navigation} />
      </View>

      <View style={{paddingBottom: '5%'}}>
        <Profile/>
        {/* <Image
          style={styles.logo}
          source={require('../../../assets/images/delice.jpeg')}
        /> */}
      </View>

      <>
        <FlatList
          // numColumns={1}
          keyExtractor={item => item?.id.toString()}
          data={List}
          renderItem={({item}) => (
            <ItemMenu
              title={item.title}
              icon={item.icon}
              onItemPressed={() => {
                navigation.navigate(item.route);
              
              }}
            />
          )}
        />
      </>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 70,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
});

export default DrawerMenu;