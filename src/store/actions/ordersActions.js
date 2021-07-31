import * as T from './actionTypes';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {database, Auth} from '../../../Setup';
import axios from 'axios';
import uuid from 'react-native-uuid';
export const addorders = callback => async (dispatch, getState) => {
  try {
    let user_Id = Auth().currentUser.uid;
    console.log('ffffff', getState().cart.cartItems);

    const Id = uuid.v4();
    const key = database().ref().push().key;
    const data = getState().cart.cartItems;

    console.log('datas', data);

    let dataToSave = {
      description: 'test2',
      idService: '1',
      orderId: 'Order Number: 4zhsw7ifU0IcY4evSWe37cvpN',
      userID: 'GKmmytx3cmMukcHBRUFJuyUOeBv1',
    };

    const res = await database()
      .ref(`ordersItems/${user_Id}/order_Number:${key}`)
      .update({...data});
    // callback();
  } catch (error) {
    alert(error);
    dispatch({type: 'err SIGNOUT'});
  }
};
// export const addorders = callback => async (dispatch, getState) => {
//   try {
//     let user_Id = Auth().currentUser.uid;
//     console.log('ffffff', getState().cart.cartItems);
//     const Id = null;
//     const Name = 'yusuf';
//     const description = '.....';
//     const orderId = '2';

//     return new Promise(function (resolve, reject) {
//       let key;
//       if (Id != null) {
//         key = Id;
//       } else {
//         key = database().ref().push().key;
//       }
//       // let dataToSave = {
//       //   Id: key,
//       //   Name: Name,
//       //   Description: description,
//       //   orderId,
//       // };
//       // Order_Number
//       const data = getState().cart.cartItems

//       console.log('datas', data);

//       let dataToSave = {
//         description: 'test2',
//         idService: '1',
//         orderId: 'Order Number: 4zhsw7ifU0IcY4evSWe37cvpN',
//         userID: 'GKmmytx3cmMukcHBRUFJuyUOeBv1',
//       };

//       database()
//         .ref(`ordersItems/${user_Id}/order_Number:${key}` )
//         .push(data)
//         .then(snapshot => {
//           resolve(snapshot);
//         })
//         .catch(err => {
//           reject(err);
//         });
//     });

//     // callback();

//   } catch (error) {
//     alert(error);
//     dispatch({type: 'err SIGNOUT'});
//   }
// };

// const ref = firestore().collection('todos');

// async function addTodo() {
//     await ref.add({
//       title: 'todo',
//       complete: false,
//     });
//     // setTodo('');
//   }
//   const deleteData = () => {
//     ref
//       .doc("sIDmPzXPeNAGTeSqe3kG")
//       .delete()
//       .then(() => {})
//       .catch(() => {});
//   };
//     React.useEffect(() => {
//         return ref.onSnapshot(querySnapshot => {
//           const list = [];
//           querySnapshot.forEach(doc => {
//             const { title, complete } = doc.data();
//             list.push({
//               id: doc.id,
//               title,
//               complete,
//             });
//           });

//           console.log('ttttt',list);

//         });
//       }, []);
