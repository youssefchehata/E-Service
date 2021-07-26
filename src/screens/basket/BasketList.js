
import React , {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useDeviceOrientation} from '@react-native-community/hooks'
import { View, Text ,FlatList, StyleSheet,TouchableOpacity} from 'react-native'
import BasketItem from './BasketItem'
import  AsyncStorage  from '@react-native-community/async-storage';
// import {submit_cmd,deleteItemBasket,StoreOffLineCmd} from "../../store/actions/fetchShopList"
// import * as _DocT from '../../store/actions/fetchDocType'

const BasketList = ({navigation}) => {
  const [refreshing]=useState(false)
  // const {window:{width:w,height:h}}=useDimensions()
  const {landscape}=useDeviceOrientation()
    const dispatch = useDispatch()
    // const List=  useSelector(state=>state.shopList.shoppingBasket) 
    const List=  [{id:'1'},{id:'2'}]
   

   

const submit =async()=>{
  const nav = currentClient==='commercial'?navigation.navigate('ClientsList'):navigation.navigate('CategoryList')
  const off =await  AsyncStorage.getItem('CONNECTION')

  if(off==="true"){
    dispatch(submit_cmd(List,documentType,IdClt,()=>{nav}))
   

  }else{
   
    dispatch(StoreOffLineCmd(List,documentType,IdClt,
      ()=>{nav}
      ))
  }
  
}




const {title,libellé,libelléName,commanderBtn}=styless
const dis=List?.length===0&&{ opacity: 0.5}
    return (
    
   
      <>

     
     
        <View  style={{height:'100%',paddingBottom:'5%'}} >
   { List && List?.length<=0?   <Text  style={title} >
Votre panier est vide</Text>:
       
        <Text  style={title} >Mon Panier</Text>
     
  
        }
     

        <View  style={libellé}    > 
          <Text   style={[libelléName,{width:'27%'}]} >Nom du produit</Text>
       { landscape&&  <Text   style={[libelléName,{width:'20%'}]} >Réference</Text>}
          <Text   style={[libelléName,{width:'12%'}]} >Pack</Text>
          <Text   style={[libelléName,{width:'12%'}]} >Qté</Text>
          {/* <Text   style={libelléName} >Prix</Text> */}
          <TouchableOpacity 
           disabled={(List?.length===0)&&true}
           onPress={() => {List.length!=0&& submit()  }}
            style={{width:'23%',alignSelf:'center',}}>
       <Text style={[commanderBtn,{fontSize:15,},dis]}  >{<Text>{'Commander'}</Text> }</Text>
   
         </TouchableOpacity>

        </View>
        {( (List.length===0) ?<View style={{height:'100%',justifyContent:'center',alignItems:'center'}}>
               <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#2196F3', letterSpacing: 1,}}
    >Merci de remplir votre panier  </Text> 
  
           
  </View>: 
 <View  style={{height:'90%',paddingBottom:'5%'}}> 
            <FlatList
          
           refreshing={refreshing}
         onRefresh={()=>{List}}  
         data={ List}
        keyExtractor={(el) => el.id.toString()}
        renderItem={({ item }) => (
          <BasketItem {...item} landscape={landscape}
          onPress={()=> dispatch(deleteItemBasket(List,item.id)) }
           />

        )}
       
      />
   
 </View>)}
        </View>
        </>
    )
}

const styless = StyleSheet.create({
  title: { fontWeight: 'bold', fontSize: 15, color: '#2196F3', letterSpacing: 1 ,padding:18},
  libellé:{ flexDirection:'row', justifyContent:'space-around' ,backgroundColor:'#e4ebf5',width:'100%',}
,
libelléName:{
  paddingVertical:18,
  letterSpacing: 1,
  color:'gray', 
  fontSize: 15,
  textAlign:'center',
},
commanderBtn:{
  color:'white',backgroundColor:'#2196F3',borderRadius:10,letterSpacing: 0.2, paddingVertical:13,
   textAlign:'center', 
},

  });

export default BasketList
