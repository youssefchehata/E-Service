import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { borderWidth } from 'styled-system';

const ItemAcceuil = ({onPress, name, description, image}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress();
      }}>
      <View style={styles.boxText}>
        <Text style={styles.textWrapper}>{name}</Text>
      </View>

      {/* <Text  >{description}</Text> */}
      <View style={styles.boxImage} >  
        <Image style={styles.myImage} source={{uri:`${image}`}} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    // borderWidth: 1.5,
    // borderColor: 'blue',
    borderRadius:20,
    marginBottom: 30,
    width: wp('40%'),
    backgroundColor: 'white',
    // borderColor: '#2196F3',
    // borderColor: 'white',
    borderLeftColor:'#f0e9e9',borderLeftWidth:1,shadowColor: "#ffffff",
    shadowOffset: { width: 0, height: 0.5, },
    shadowOpacity: 0.9,
     shadowRadius: 3.84,
    
  },

  boxText:{
         padding:10
  },
  textWrapper: {
    fontWeight: 'bold',
   
    
    color: '#4169E1',
    // letterSpacing: 1,
  
    fontSize: hp('2%'),
    textAlign:"center"
  },
  boxImage:{
    // width: wp('30%'),
    // height:hp('30%'),
    // borderWidth:2,
    // borderColor:"red",
  },
  myImage: {
    height: wp('30%'),
    width: wp('30%'),
    paddingBottom: 30,
    borderRadius: 40,
  },
});
export default ItemAcceuil;
