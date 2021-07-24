import * as T from './actionTypes';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {storage} from '../../../Setup';
import axios from 'axios'

//   const servicesList = async() => {
//     const storageRef = storage().ref()
//     const entityRef = storage().ref('data/datalist.json');
//     const objectRef = storageRef.child('Services.json')
   
//     let url = await objectRef.getDownloadURL()
//     let response = await axios.get(url)
//     // this.item = response.data
//     console.log(response)
//   };

  export const servicesList = () => async dispatch => {
    try {
        const storageRef = storage().ref()
    const entityRef = storage().ref('data/datalist.json');
    const objectRef = storageRef.child('Services.json')
   
    let url = await objectRef.getDownloadURL()
    let response = await axios.get(url)
    // this.item = response.data
    console.log(response)
      dispatch({type: T.GET_SERVICES,payload:response.data});
    
    } catch (error) {
      alert(error);
      dispatch({type: 'err get services'});
    }
  };