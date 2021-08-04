import React from 'react'
import { View, Image, TouchableOpacity,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../config/colors';
export  const NavigationDrawerButton = ({navigationProps,icon}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=>navigationProps.toggleDrawer()}>
        {icon   ||
      <Icon
    //   style={styles.icon}
      name="navicon"
      size={25}
      color={colors.primary}
    //   onPress={() => navigation.navigate(routes.ACCEUIL)}
    />
        }
        
      </TouchableOpacity>
    </View>
  );
}

export  const CloseNavigationDrawerButton = ({navigationProps,color}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=>navigationProps.toggleDrawer()}>
    <Text style={{fontSize:25,color:color||'red',paddingHorizontal:10}}>✖</Text>
        {/* <Image
          source={require('../assets/images/drawer-150x150.png')}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        /> */}
      </TouchableOpacity>
    </View>
  );
}