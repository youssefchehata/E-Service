import React from 'react'
import { View, Text } from 'react-native'
import {submitList} from '../apiService';
import {database} from '../../../Setup';
const Lists = () => {
    const [Id, setId] = React.useState();
    const [Name, setName] = React.useState('');
    const [Description, setDescription] = React.useState('');
    const [users, setUsers] = React.useState([]);

  console.log("orders",users);

  const savetoLists = () => {
    submitList(Id, Name, Description)
      .then(result => {
        setId(null);
        setName('');
        setDescription('');
      })
      .catch(error => {
        console.log(error);
      });
  };


//real time database
    React.useEffect(() => {
        const userRef = database().ref('/lists');
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
        <View >
            <Text
            style={{height:40,backgroundColor:'gray'}}
            onPress={()=>submitList("first",'secondedit',"thirdedit")}
            >jhhhhh</Text>
        </View>
    )
}

export default Lists
