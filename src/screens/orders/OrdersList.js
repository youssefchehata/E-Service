import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

// import { servicesList } from '../../store/actions/ServicesAction';
import { servicesList,getBasket, ordersList } from '../../store/actions/index';
import routes from '../../router/routes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderItem from './OrderItem';
import AnimationBackGround from '../../components/animation/Animation';
const OrdersList = () => {
  const [refreshing] = React.useState(false);
          const List=  useSelector(state=>state.orders.ordersList) 

  const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(ordersList())
        // dispatch(getBasket())
    },[])

console.log('yousseflist',List)

const {title, libellé, libelléName, commanderBtn} = styless;
const dis = List?.length === 0 && {opacity: 0.5};
    return (
      <>
       <AnimationBackGround/>
      <View style={{height: hp('100%'), paddingBottom: '5%'}}>
        {List && List?.length <= 0 ? (
          <Text style={title}>Votre liste d'ordre est vide</Text>
        ) : (
          <Text style={title}>Mes Ordres</Text>
        )}

        <View style={libellé}>
          <Text style={[libelléName, {width: wp('50%')}]}>Id d'order</Text>

          <Text style={[libelléName, {width: wp('15%')}]}>Prix</Text>
          {/* <Text   style={libelléName} >Prix</Text> */}
          <TouchableOpacity
          
         
     
            style={{width: wp('20%'), alignSelf: 'center'}}>
       
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
             vous n'avez pas encore d'ordre{' '}
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
              // keyExtractor={el => el.id.toString()}
              renderItem={({item}) => (
                <OrderItem
                  {...item}
                 
                  onPress={() => dispatch(removeFromCart(item.id))}
                />
              )}
            />
          </View>
        )}
      </View>
    </>)
}

export default OrdersList

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
