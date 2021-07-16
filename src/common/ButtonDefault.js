
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ButtonDefault = ({onPress,title='title'}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
        borderWidth: 1.5,
        borderRadius: 5,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 15,
          color: 'white',
          letterSpacing: 2,
          alignSelf: 'center',
          paddingVertical: '2%',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonDefault;