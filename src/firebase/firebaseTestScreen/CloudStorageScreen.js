import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import uuid from 'react-native-uuid';
import axios from 'axios'
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import {storage} from '../../../Setup';
// import datalist from '../assets/data/datalist.json';
const CloudStorageScreen = () => {
  // console.log('datalist',datalist)
  const image = uuid.v4();
  const storageRef = storage().ref(`images/${image}.jpeg`);
  const [allImages, setAllImages] = React.useState([]);

  const dataURL =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';
  console.log('allImages', allImages);

  const uploadImage = () => {
    const task = storageRef.putString(dataURL, storage.StringFormat.DATA_URL);
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
    });
    task.then(imageSnapshot => {
      console.log('Image Upload Successfully');
      storage()
        .ref(imageSnapshot.metadata.fullPath)
        .getDownloadURL()
        .then(downloadURL => {
          setAllImages(allImages => [...allImages, downloadURL]);
          database().ref('imageGallery').update({
            imageURL: downloadURL,
          });
        });
    });
  };
  const getAllImages = () => {
    const ref = storage().ref('images');
    ref.list().then(result => {
      setAllImages([]);
      result.items.forEach(itemsRef => {
        itemsRef.getDownloadURL()
        .then(downloadURL => {
          setAllImages(allImages => [...allImages, downloadURL]);
        });
      });
    });
  };

  const renderImages = item => {
    return (
      <Image
        source={{uri: item.item}}
        key={item.index}
        style={{
          width: Dimensions.get('window').width / 4,
          height: Dimensions.get('window').width / 4,
        }}
      />
    );
  };

  const readJsonFileFromcloud = async() => {
    const storageRef = storage().ref()
    const entityRef = storage().ref('data/datalist.json');
    const objectRef = storageRef.child('Services.json')
   
    let url = await objectRef.getDownloadURL()
    let response = await axios.get(url)
    // this.item = response.data
    console.log(response)
  };
  return (
    <View>
      <Image
        style={{
          width: 100,
          height: 50,
          borderWidth: 1,
          borderColor: 'red',
          margin: 30,
        }}
        source={{uri: dataURL}}
      />
      <Text>CloudStorageScreen</Text>
      <Text
        style={{height: 40, backgroundColor: 'gray'}}
        onPress={() => uploadImage()}>
        uploadImage
      </Text>

      <Text
        style={{height: 40, backgroundColor: 'gray', margin: 30}}
        onPress={() => getAllImages()}>
        getAllImages
      </Text>

      <FlatList
        data={allImages}
        horizontal={false}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderImages}
      />

<Text
        style={{height: 40, backgroundColor: 'gray', margin: 30}}
        onPress={() => readJsonFileFromcloud()}>
        getAllImages
      </Text>
    </View>
  );
};

export default CloudStorageScreen;
