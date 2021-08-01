import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';

// import { servicesList } from '../../store/actions/ServicesAction';
import { servicesList,getBasket, ordersList } from '../../store/actions/index';
import routes from '../../router/routes';

const OrdersList = () => {

          const List=  useSelector(state=>state.orders.ordersList) 

  const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(ordersList())
        // dispatch(getBasket())
    },[])

console.log('yousseflist',List)

    return (
        <View>
         {/* { List?.map(item => {
      return (
        <View key={item.id} style={{justifyContent:'center',alignItems:'center'}} >
          <Text>{item.name}</Text>
      
        </View>
      );
    })
            } */}
        </View>
    )
}

export default OrdersList

const styles = StyleSheet.create({})
