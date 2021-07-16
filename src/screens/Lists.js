import React from 'react'
import { View, Text } from 'react-native'
import {submitUser} from '../firebase/apiService';
import {database} from '../../Setup';
const Lists = () => {
    const [Id, setId] = React.useState();
    const [Name, setName] = React.useState('');
    const [Position, setPosition] = React.useState('');
    const [users, setUsers] = React.useState([]);

  console.log("users",users);
//real time database
    React.useEffect(() => {
        const userRef = database().ref('/orders');
        const OnLoadingListener = userRef.on('value', snapshot => {
          setUsers([]);
          snapshot.forEach(function (childSnapshot) {
            setUsers(users => [...users, childSnapshot.val()]);
          });
        });
        const childRemovedListener = userRef.on('child_removed', snapshot => {
          // Set Your Functioanlity Whatever you want.
          alert('Child Removed');
        });
    
        const childChangedListener = userRef.on('child_changed', snapshot => {
          // Set Your Functioanlity Whatever you want.
          alert('Child Updated/Changed');
        });
    
        return () => {
          userRef.off('value', OnLoadingListener);
          userRef.off('child_removed', childRemovedListener);
          userRef.off('child_changed', childChangedListener);
        };
      }, []);
    return (
        <View>
            <Text>jhhhhh</Text>
        </View>
    )
}

export default Lists
