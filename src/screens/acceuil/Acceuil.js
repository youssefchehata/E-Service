import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import ItemAcceuil from './ItemAcceuil';
// import { servicesList } from '../../store/actions/ServicesAction';
import { servicesList,getBasket } from '../../store/actions/index';
import routes from '../../router/routes';

const Acceuil = ({navigation}) => {
      const {services} = useSelector( (state) => state.services );
      // const {cartItems}=  useSelector(state=>state.cart) 

  const dispatch = useDispatch();
//   const List = [{id:1,name:'uuu'},{id:2,name:'uuu'}]
  const List =services


React.useEffect(()=>{
    dispatch(servicesList())
    dispatch(getBasket())
},[])
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.bienvenue}>
          Bienvenue {'\n'}
         
        </Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          columnWrapperStyle={{
            flex: 1,
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            // paddingBottom: 10,
            // paddingHorizontal:15
          }}
          numColumns={2}
          data={List}
          keyExtractor={el => el.id.toString()}
          renderItem={({item}) => (
            <ItemAcceuil
              {...item}
              onPress={() => navigation.navigate(routes.DETAILS,item)}
              //   onPress={()=> dispatch(deleteItemBasket(List,item.id)) }
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bienvenue: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4169E1',
    letterSpacing: 1,
    paddingVertical: 30,
  },
});

export default Acceuil;
