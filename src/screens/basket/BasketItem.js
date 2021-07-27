import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../config/colors';
const BasketItem = ({onPress, name = 'not yet', qte = '0'}) => {
  const {libellé, libelléName} = styless;

  return (
    <View style={[libellé]}>
      <Text style={[libelléName, {width: wp('50%')}]}>{name}</Text>

      <Text style={[libelléName, {width: wp('15%')}]}>{qte}</Text>

      <TouchableOpacity
        style={[libelléName, {width: wp('20%'), paddingEnd: 30}]}
        onPress={onPress}>
        <Icon
          style={{alignSelf: 'flex-end'}}
          name="trash"
          size={30}
          color={colors.danger}
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

export default BasketItem;
