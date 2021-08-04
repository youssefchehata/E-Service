import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import colors from '../../config/colors';



const ItemMenu = ({ onItemPressed, title, icon }) => {
  return (
    <View style={{flexDirection:'row'}} >
      <Text style={{paddingLeft:20 }}>{icon} </Text>
      <TouchableOpacity
        style={[{ height: 70 }]}
        onPress={() => {
          onItemPressed();
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft:20 
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemMenu;