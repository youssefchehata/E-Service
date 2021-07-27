
import AsyncStorage from '@react-native-community/async-storage';
// export const getCache= async (key, dispatch,type) =>{
//   const storedCache = await AsyncStorage.getItem(key);
//   const GetStoredCache =await JSON.parse(storedCache)
//   console.log("key",key);
//   console.log("GetStoredCache",GetStoredCache);
//   return await  dispatch({ type, payload:GetStoredCache });
// }
export const getCache = (key, dispatch,type) => {

  AsyncStorage.getItem(key).then((stored) => {

    dispatch({ type, payload: JSON.parse(stored), });
   
  });
};