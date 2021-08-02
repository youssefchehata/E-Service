import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

 class FacebookBtn extends Component {
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
      </View>
    );
  }
};
export default FacebookBtn

// import React from 'react';
// import {connect} from 'react-redux';
// import {View, Text, Platform, TouchableOpacity, Button} from 'react-native';
// import { AccessToken, GraphRequest, GraphRequestManager, LoginManager, } from 'react-native-fbsdk-next';
// import {useDispatch} from 'react-redux';
// import { fbkCheckAccount} from '../actions/apiCalls';
// import ModalRegister from './ModalRegister';
// import AsyncStorage from '@react-native-community/async-storage';
// import Fbk from '../assets/images/icon_facebook.svg';
// const FacebookBtn = (props) => {
//   const dispatch = useDispatch();
//   const [userInfo, setUserInfo] = React.useState({});
//   const [open, setOpen] = React.useState(false);

//   const getInfoFromToken = (token) => {
//     const PROFILE_REQUEST_PARAMS = {
//       fields: {
//         string: 'id, name,  first_name, last_name,email',
//       },
//     };
//     const profileRequest = new GraphRequest(
//       '/me',
//       {token, parameters: PROFILE_REQUEST_PARAMS},
//       (error, result) => {
//         if (error) {
//           console.log('login info has error: ' + error);
//         } else {
//           setUserInfo(result);
//           console.log('fbkapi', result);
//           const check= {userID:result.id, email:result.email, last_name:result.last_name, first_name:result.first_name }
//           // const check = { userID: '11111!!11', email: 'éààééé@test.com', last_name: 'eeeeooe', first_name: 'eeeeààe', };
//           dispatch(
//             fbkCheckAccount(check, () => {
//               setOpen(true);
//             }),
//           );
//           // console.log('result:', result);
//         }
//       },
//     );
//     new GraphRequestManager().addRequest(profileRequest).start();
//   };

//   const afterlogin = () => {
//     AccessToken.getCurrentAccessToken().then((data) => {
//       const accessToken = data.accessToken.toString();
//       getInfoFromToken(accessToken);
//     });
//   };

//   const FBKlogin = async () => {
//     const accessToken = await AsyncStorage.getItem('FBK_token');
//     console.log('accessTokenfffbbk', accessToken);
//     LoginManager.logInWithPermissions([
//       'public_profile',
//       'email',
//       'user_friends',
//     ]).then(
//       function (result) {
//         if (result.isCancelled) {
//           console.log('Login cancelled');
//         } else {
//           afterlogin();
//           console.log(
//             'Login success with permissions: ' +
//               result.grantedPermissions.toString(),
//           );
//           console.log('Login succe: ', result);
//         }
//       },
//       function (error) {
//         console.log('Login fail with error: ' + error);
//       },
//     );
//   };

//   return (
//     <>
     
//       <TouchableOpacity
//         style={{flexDirection: 'row'}}
//         onPress={() => {
//           FBKlogin();
//         }}>
//         <Text>
//           {' '}
//           <Fbk />{' '}
//         </Text>

//         <Text style={{alignSelf: 'center'}}></Text>
//       </TouchableOpacity>
//     </>
//   );
// };

// export default FacebookBtn;