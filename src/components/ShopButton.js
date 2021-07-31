import React, {useEffect, useState, useCallback, memo} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDimensions} from '@react-native-community/hooks';
import {quantité} from "../store/actions/index"


const ShopButton = ({sendToBasket,quantité}) => {
  const { window: {width: w, height: h}, } = useDimensions();

  const [qt_pcs, setqt_pcs] = useState(0);

   useEffect(() => {
       setqt_pcs(quantité)
   }, [quantité]);



  const postiveqt = qt_pcs <= 0 ? 0 : qt_pcs - 1;

  const {QtName, icon, plustext, btnBasket} = styless;
  const dispatch = useDispatch();
    // useEffect(() => {
    //   qt_pcs != 0 && dispatch(quantité(qt_pcs, Math.random()));
    // }, [qt_pcs]);
  const iconP = {
    borderRadius: Math.round(w + h) / 2,
    width: w >= 401 ? w / 20 : w / 10,
    height: w >= 401 ? w / 20 : w / 10,
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Text style={QtName}>Quantité</Text>

        <TouchableOpacity
          style={[icon, iconP]}
          // onPress={() => {setqt_pcs(qt_pcs+1) }}
          onPress={useCallback(() => {
            setqt_pcs(qt_pcs + 1), [qt_pcs];
          })}>
          <Text style={plustext}> + </Text>
        </TouchableOpacity>

        <Text style={QtName}>{`${qt_pcs}`} </Text>

        <TouchableOpacity
          style={[icon, iconP]}
          // onPress={() => {setqt_pcs(postiveqt) }}
          onPress={useCallback(() => {
            setqt_pcs(postiveqt), [qt_pcs];
          })}>
          <Text style={plustext}> - </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={()=>sendToBasket(qt_pcs)}>
        <Text style={btnBasket}> Ajouter au panier</Text>
      </TouchableOpacity>
    </View>
  );
};
const styless = StyleSheet.create({
  plustext: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4169E1',
    letterSpacing: 1,
    textAlign: 'center',
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1eef2',
    margin: 5,
  },

  QtName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4169E1',
    letterSpacing: 1,
  },

  btnBasket: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    letterSpacing: 1,

    backgroundColor: '#4169E1',
    padding: 6,
    borderRadius: 10,
    margin: 10,
    textAlign: 'center',
  },
});
export default memo(ShopButton);
