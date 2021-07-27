import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import BasketItem from './BasketItem';
import AsyncStorage from '@react-native-community/async-storage';
import {getBasket, removeFromCart} from '../../store/actions/index';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const BasketList = ({navigation}) => {
  const [refreshing] = useState(false);
  // const {window:{width:w,height:h}}=useDimensions()
  const {landscape} = useDeviceOrientation();
  const dispatch = useDispatch();
  const List = useSelector(state => state.cart.cartItems);
  // console.log("basketView",List)
  // const List=  [{id:'1'},{id:'2'}]

  // const submit = async () => {
  //   const nav =
  //     currentClient === 'commercial'
  //       ? navigation.navigate('ClientsList')
  //       : navigation.navigate('CategoryList');
  //   const off = await AsyncStorage.getItem('CONNECTION');

  //   if (off === 'true') {
  //     dispatch(
  //       submit_cmd(List, documentType, IdClt, () => {
  //         nav;
  //       }),
  //     );
  //   } else {
  //     dispatch(
  //       StoreOffLineCmd(List, documentType, IdClt, () => {
  //         nav;
  //       }),
  //     );
  //   }
  // };

  React.useEffect(() => {
    dispatch(getBasket());
  }, []);


const submit=()=>{
  alert('submit')
}



  const {title, libellé, libelléName, commanderBtn} = styless;
  const dis = List?.length === 0 && {opacity: 0.5};
  return (
    <>
      <View style={{height: hp('100%'), paddingBottom: '5%'}}>
        {List && List?.length <= 0 ? (
          <Text style={title}>Votre panier est vide</Text>
        ) : (
          <Text style={title}>Mon Panier</Text>
        )}

        <View style={libellé}>
          <Text style={[libelléName, {width: wp('50%')}]}>Nom du produit</Text>

          <Text style={[libelléName, {width: wp('15%')}]}>Qté</Text>
          {/* <Text   style={libelléName} >Prix</Text> */}
          <TouchableOpacity
            disabled={List?.length === 0 && true}
            onPress={() => {
              List.length != 0 && submit();
            }}
            style={{width: wp('20%'), alignSelf: 'center'}}>
            <Text style={[commanderBtn, {fontSize: 15}, dis]}>
              {<Text>{'Commander'}</Text>}
            </Text>
          </TouchableOpacity>
        </View>
        {List.length === 0 ? (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 15,
                color: '#2196F3',
                letterSpacing: 1,
              }}>
              Merci de remplir votre panier{' '}
            </Text>
          </View>
        ) : (
          <View style={{height: '90%', paddingBottom: '5%'}}>
            <FlatList
              refreshing={refreshing}
              onRefresh={() => {
                List;
              }}
              data={List}
              keyExtractor={el => el.id.toString()}
              renderItem={({item}) => (
                <BasketItem
                  {...item}
                  landscape={landscape}
                  onPress={() => dispatch(removeFromCart(item.id))}
                />
              )}
            />
          </View>
        )}
      </View>
    </>
  );
};

const styless = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#4169E1',
    letterSpacing: 1,
    padding: 18,
  },
  libellé: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e4ebf5',
    width: '100%',
  },
  libelléName: {
    paddingVertical: 18,
    letterSpacing: 1,
    color: 'gray',
    fontSize: 18,
    textAlign: 'center',
  },
  commanderBtn: {
    color: 'white',
    backgroundColor: '#4169E1',
    borderRadius: 10,
    letterSpacing: 0.2,
    paddingVertical: 13,
    textAlign: 'center',
  },
});

export default BasketList;
