import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import {submitUser} from '../firebase/apiService';
import {database} from '../../Setup';
import ButtonDefault from '../common/ButtonDefault';

const RealtimeDBScreen = ({navigation}) => {
  const [Id, setId] = React.useState();
  const [Name, setName] = React.useState('');
  const [Position, setPosition] = React.useState('');
  const [users, setUsers] = React.useState([]);

  const saveUsers = () => {
    submitUser(Id, Name, Position)
      .then(result => {
        setId(null);
        setName('');
        setPosition('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteAllUsers = () => {
    database()
      .ref('users')
      .remove()
      .then(() => {
        setUsers([]);
      });
  };

  const deleteUser = Item => {
    database()
      .ref('users/' + Item.Id)
      .remove()
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  };

  const editUser = Item => {
    setId(Item.Id);
    setName(Item.Name);
    setPosition(Item.Position);
  };

  React.useEffect(() => {
    const userRef = database().ref('/users');
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
      <Text style={{backgroundColor:'gray',padding:30}} >Realtime Database</Text>
      <View style={{margin: 10}} />
      <ButtonDefault onPress={deleteAllUsers} title="deleteAllUsers" />

      <View style={{margin: 10}} />

      <ButtonDefault onPress={saveUsers} title="saveUsers" />

      <View style={{margin: 10}} />

      <TextInput
        placeholder="Name"
        value={Name}
        onChangeText={text => setName(text)}
      />

      <TextInput
        keyboardType="numeric"
        placeholder="Position"
        value={Position}
        onChangeText={text => setPosition(text)}
      />
      <View>
        {users.map((item, index) => (
          <View key={index}>
            <View>
              <Text>
                {'Name : '}
                {item.Name}
              </Text>
              <Text>
                {'Position : '}
                {item.Position}
              </Text>
            </View>
            <View>
              <ButtonDefault onPress={() => editUser(item)} title="editUser" />
              <View style={{margin: 10}} />
              <ButtonDefault
                onPress={() => deleteUser(item)}
                title="deleteUser"
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
export default RealtimeDBScreen;
