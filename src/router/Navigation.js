import React from 'react';
import {View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../config/colors';
import Acceuil from '../screens/Acceuil';
import Login from '../screens/Login';

// import Header from '../components/Header';




// ======================Drawer=======================================
  


const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
       initialRouteName="Login"
      //  initialRouteName="Commencer"
       
      //  initialRouteName="RadioButton"
        //  initialRouteName="ExPagination"
      
      //  initialRouteName="ParamètresMachine"
     
        // initialRouteName="RapportDePoste"
      screenOptions={({route}) =>({
        headerStyle: {backgroundColor:colors.white},
        headerTintColor: colors.blue,
        headerLeft: () =>null,
        // headerTitle:()=><Header   />
        
      })}
      >


      <Stack.Screen name="Acceuil" component={Acceuil}
      // options={({route})=>({title:route.params,headerTitle:()=><Header   route={route} />})}

      />
 {/* ------------------------------------commonNav------------------------------------------ */}

        <Stack.Screen name="Login"  options={{headerShown:false}} component={Login } />

      


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
    tabBarOptions={{
        activeBackgroundColor:'tomato',
        activeTintColor:'white',
        inactiveBackgroundColor:'#eee',
        inactiveTintColor:"black"
    }}
    
    >
      <Tab.Screen name="Feed" component={StackNavigator} options={{
          tabBarIcon:({size,color})=>(<Text style={{fontSize:size ,color}} >@</Text>)
      }} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};
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