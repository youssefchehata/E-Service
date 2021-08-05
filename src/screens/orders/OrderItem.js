import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../config/colors';
const OrderItem = ({onPress, orderId = 'not yet', total = '0'}) => {
  const  name=orderId
  const {libellé, libelléName} = styless;

  return (
    <View style={[libellé]}>
      <Text style={[libelléName, {width: wp('50%')}]}>{name}</Text>

      <Text style={[libelléName, {width: wp('15%')}]}>{total}</Text>

      <TouchableOpacity
        style={[libelléName, {width: wp('20%'), paddingEnd: 30}]}
        onPress={onPress}>
        <Icon
          style={{alignSelf: 'flex-end'}}
          name="check"
          size={30}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );
};
 
const styless = StyleSheet.create({
  libellé: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('100%'),
  },
  libelléName: {
    paddingVertical: 18,

    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#4169E1',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default OrderItem;
