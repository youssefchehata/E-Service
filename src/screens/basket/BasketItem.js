import React from 'react'
import { Text, View, StyleSheet,Dimensions,TouchableOpacity} from 'react-native';



const BasketItem = ({onPress,ar_design='not yet',qte_piece='0',qte_colisee='0',ar_ref='0',landscape=false}) => {

    const {libellé,libelléName}=styless

    return (


  <View  style={[libellé]}    > 

                         <Text style={[libelléName,{width:'27%',}]}  >{ar_design}</Text> 
                       { landscape&&  <Text style={[libelléName,{width:'20%',}]}  >{ar_ref}</Text> }
                        <Text style={[libelléName,{width:'12%',}]} >{qte_colisee}</Text>
                         <Text style={[libelléName,{width:'12%',}]}>{qte_piece}</Text> 
                          
                       <TouchableOpacity
                         style={[libelléName,{width:'23%',paddingEnd:30}]}   onPress={onPress} ><Text style={{alignSelf:'flex-end'}}>delete</Text></TouchableOpacity>   
  
        </View>

    )
}
 
const styless = StyleSheet.create({
    title: { fontWeight: 'bold', fontSize: Dimensions.get('window').width >= 401 ? 12 : 7.2, color: '#2196F3', letterSpacing: 1,paddingVertical:18, },



    libellé:{ flexDirection:'row', justifyContent:'space-around' ,width:'100%'}
  ,

  
  libelléName:{
    paddingVertical:18,
    
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#2196F3', 
    fontSize: 15,
    textAlign:'center',
    
  
  },


  
  
    
    
       
    
    });
  

export default BasketItem