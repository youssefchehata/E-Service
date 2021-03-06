import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import ShopButton from '../components/ShopButton';
import {useDispatch,useSelector} from 'react-redux'
import { addToBasket } from '../store/actions/index';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import routes from '../router/routes';

const DetailsService = props => {
  const dispatch = useDispatch()
  console.log('itemm details', props.route.params);
// =======================================================================
  const {cartItems} = useSelector(state => state.cart);

  const existInBasket=cartItems.find(x => x.id === props.route.params.id);
  const [qt_pcs, setqt_pcs] = React.useState(0);
React.useEffect(()=>{
if(existInBasket){
  setqt_pcs(existInBasket.qte)
}else{
  null
}

},[])
  //  console.log("exisst",existInBasket.qte)

// ==================================================================

  const {name, image, description} = props.route.params;

  const sendToBasket =(qte)=>{
   console.log(qte)
   dispatch(addToBasket({...props.route.params,qte}, props.navigation.navigate(routes.BASKET)))
   
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxText}>
          <Text style={styles.textWrapper}>
            Service details:{'\n'} {name}
          </Text>
        </View>

        <View style={styles.boxDescrip}>
          <Text style={styles.textDescrip}>{description}</Text>
        </View>

        <View>
          <ShopButton sendToBasket={sendToBasket} quantité={qt_pcs}  />
        </View>

        <View style={styles.boxImage}>
          <Image style={styles.myImage} source={{uri: `${image}`}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsService;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:hp('100%'),
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    // borderWidth: 1.5,
    // borderColor: 'blue',
    // borderRadius: 20,
    // marginBottom: 30,
    // width: wp('40%'),
    backgroundColor: 'white',
    // borderColor: '#2196F3',
    // borderColor: 'white',
    borderLeftColor: '#f0e9e9',
    borderLeftWidth: 1,
    shadowColor: '#ffffff',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
  },

  boxText: {
    padding: 10,
  },
  textWrapper: {
    fontWeight: 'bold',

    color: '#4169E1',
    letterSpacing: 1,

    fontSize: hp('3%'),
    textAlign: 'center',
  },

  boxDescrip: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  textDescrip: {
    fontWeight: 'bold',

    color: 'gray',
    letterSpacing: 1,

    fontSize: hp('2.5%'),
    textAlign: 'center',
  },

  boxImage: {
    // width: wp('30%'),
    // height:hp('30%'),
    // borderWidth:2,
    // borderColor:"red",
  },
  myImage: {
    height: wp('50%'),
    width: wp('50%'),
    paddingBottom: 30,
    borderRadius: 40,
  },
});
