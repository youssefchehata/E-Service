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
      orderId: key,
      userID: user_Id,
    };

    const res = await database()
      // .ref(`ordersItems/${user_Id}`)
      .ref(`ordersItems/${user_Id}`)
      .push({...data});
    await AsyncStorage.removeItem('cartItems');
    dispatch({type: T.CART_ITEMS, payload: []});
    dispatch({type: 'addorders'});

    // JSON.stringify
    // callback();
  } catch (error) {
    alert(error);
    dispatch({type: 'err SIGNOUT'});
  }
};

export const ordersList = () => async dispatch => {
  try {
    const userID = Auth().currentUser.uid;
    const userRef = database().ref(`/ordersItems/${userID}`);

    const list = [];
    //child_added
    userRef.on('value', snapshot => {
      snapshot.forEach(child => {
        // list.push({orderId: child.key,userID:userID, data: child.val()});
        list.push({
          total: child
            .val()
            ?.map(el => el?.qte * el?.prix)
            ?.reduce((a, b) => a + b, 0),
          orderId: child.key,
          userID: userID,
          data: child.val(),
        });

        dispatch({type: T.ORDERS, payload: list});
        console.log('totallallcmd new reducer to do',list?.map(el => el?.total) ?.reduce((a, b) => a + b, 0)) 
      });
    });
  } catch (error) {
    alert(error);
    dispatch({type: 'err get orders'});
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
