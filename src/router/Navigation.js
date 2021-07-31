import React from 'react';
import {View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../config/colors';
import Acceuil from '../screens/acceuil/Acceuil';
import Login from '../screens/Login';

// import Header from '../components/Header';
import Header from '../screens/Header';
import DetailsService from '../screens/DetailsService';
import BasketList from '../screens/basket/BasketList';
import Register from '../screens/Register';




// ======================Drawer=======================================
  


const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="Acceuil"
      //  initialRouteName="Commencer"
       
      //  initialRouteName="RadioButton"
        //  initialRouteName="ExPagination"
      
      //  initialRouteName="ParamètresMachine"
     
        // initialRouteName="RapportDePoste"
      screenOptions={({route}) =>({
        headerStyle: {backgroundColor:colors.white},
        headerTintColor: colors.blue,
        headerLeft: () =>null,
        headerTitle:()=><Header />
        
      })}
      >


      <Stack.Screen name="Acceuil" component={Acceuil}
      
      // options={({route})=>({title:route.params,headerTitle:()=><Header   route={route} />})}

      />
 {/* ------------------------------------commonNav------------------------------------------ */}
 
        <Stack.Screen name="Login"  options={{headerShown:true}} component={Login } />
        <Stack.Screen name="Register"  options={{headerShown:false}} component={Register } />
        <Stack.Screen name="DetailsService"  component={DetailsService} />
        <Stack.Screen name="BasketList"  component={BasketList} />

      
        

      {/* CategoryList:{ screen:CategoryList , navigationOptions: ({navigation}) => ({ headerTintColor:'white', headerStyle:{ backgroundColor:'#2196F3' ,height:undefined}, headerLeft: () =>null, headerTitle:()=><Header  navigation={navigation}/>, }), }, */}



      {/* <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        //  options={{title:'Tweet Details'}}
        //make title Dynamic
        // options={({route})=>({title:route.params.id})}
        options={{
          title: 'Tweet Details',
        //   headerStyle: {backgroundColor: 'tomato'},
          // headerShown:false
        }}
      /> */}
    </Stack.Navigator>
  );
};
// =====================tab================================
  const Feed    = () => { return <Text>feed   </Text>; };
  const Account = () => { return <Text>Account</Text>; };

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <Tab.Navigator
    // tabBarOptions={{
    //     activeBackgroundColor:'tomato',
    //     activeTintColor:'white',
    //     inactiveBackgroundColor:'#eee',
    //     inactiveTintColor:"black"
    // }}
    tabBarOptions={{
      activeTintColor: '#101010',
      style: {
        backgroundColor: '#ffd700',
        activeBackgroundColor:'tomato'
      }
    }}
    >
      <Tab.Screen name="Feed" component={StackNavigator} options={{
          tabBarIcon:({size,color})=>(<Text style={{fontSize:size ,color}} >@</Text>)
      }} />
      <Tab.Screen name="Acceuil" component={Acceuil} />
      <Tab.Screen name="DetailsService" component={DetailsService} />
    </Tab.Navigator>
  );
};



function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#101010',
        style: {
          backgroundColor: '#ffd700'
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName
          if (route.name == 'Acceuil') {
            iconName = 'ios-home'
          } else if (route.name == 'Profile') {
            iconName = 'ios-person'
          }
          // return <Ionicons name={iconName} color={color} size={size} />
          return null
        }
      })}>
      <Tab.Screen name='Acceuil' component={Acceuil} />
      {/* <Tab.Screen name='Deta' component={Profile} /> */}
    </Tab.Navigator>
  )
}
// ==================drawer========================
const Drawer = createDrawerNavigator();

 const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    // openByDefault
    // drawerType={isLargeScreen ? 'permanent' : 'back'}
    // drawerStyle={isLargeScreen ? null : { width: '100%' }}
    // overlayColor="transparent"
    drawerContent={(props) => <DrawerMenu {...props} />}>

      <Drawer.Screen name="feed"   component={StackNavigator} />
       </Drawer.Navigator>
  );
};
// ===================
const Nav = () => {
  return (
    <NavigationContainer 
    //  theme={navigationTheme}
      >
      <StackNavigator />
      {/* <DrawerNavigator /> */}
      {/* <TabNavigator/> */}
    </NavigationContainer>
  );
};

export default Nav;