import React from 'react'
import uuid from 'react-native-uuid';
import axios from 'axios'
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import {firestore} from '../../../Setup';

const CloudFireStore = () => {

    const usersCollectionRef = firestore().collection('Users');

    const adduser = () => {
      usersCollectionRef.add({
        Name: 'Harry',
        Location: new firestore.GeoPoint(53.483959, -2.244644),
        age: 28,
        dateAdded: firestore.FieldValue.serverTimestamp(),
      });
    };

    // const deleteData = () => {
    //   usersCollectionRef
    //     .doc('12345')
    //     .delete()
    //     .then(() => {})
    //     .catch(() => {});
    // };
  
    const fetchData = () => {
      usersCollectionRef.get().then((snapshot) => {
        snapshot.forEach((documentSnapshot) => {
          console.log(documentSnapshot.data());
        });
      });
    };
    React.useEffect(() => {
      usersCollectionRef.onSnapshot((documentSnapshot) => {
        console.log(documentSnapshot.size);
      });
    }, []);
// ===================================================
const ref = firestore().collection('todos');


async function addTodo() {
    await ref.add({
      title: 'todo',
      complete: false,
    });
    // setTodo('');
  }
  const deleteData = () => {
    ref
      .doc("sIDmPzXPeNAGTeSqe3kG")
      .delete()
      .then(() => {})
      .catch(() => {});
  };
    React.useEffect(() => {
        return ref.onSnapshot(querySnapshot => {
          const list = [];
          querySnapshot.forEach(doc => {
            const { title, complete } = doc.data();
            list.push({
              id: doc.id,
              title,
              complete,
            });
          });
    
          console.log('ttttt',list);
    
     
        });
      }, []);
    return (
        <View>
            <Text>CloudFireStore</Text>
            <Text
        style={{height: 40, backgroundColor: 'gray'}}
        onPress={() => addTodo()}>
        adduser
      </Text>

      <Text
        style={{height: 40, backgroundColor: 'gray',margin:50}}
        onPress={() => deleteData()}>
        deleteData
      </Text>
      <Text
        style={{height: 40, backgroundColor: 'gray'}}
        onPress={() => fetchData()}>
        fetchData
      </Text>
      
        </View>
    )
}

export default CloudFireStore
