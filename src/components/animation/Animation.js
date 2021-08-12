import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class AnimationBackGround extends React.Component {
  render() {
    return (
      <View style={styles.overlay}>
      <LottieView
      style={{backgroundColor:'#3b92d7'}}
        source={require('./animation.json')}
        // colorFilters={[{
        //   keypath: "button",
        //   color: "#F00000"
        // },{
        //   keypath: "Sending Loader",
        //   color: "#F00000"
        // }]}
        autoPlay
        loop
      />
         </View>
    );
  }
}
const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height:hp('100%'),
    opacity: 0.9,
    width: wp('100%'),
    // zIndex: 1,
  },
});
