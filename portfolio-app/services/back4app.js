import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native.js';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  'G8BP0twwkXaQP5zPxdMZrTVt9FHONjbLBNOvhNKv',
  'zl8sAcCuTBAoQ90wc9qFAvJiapIn4cINdI3bnfhN'
);
Parse.serverURL = 'https://parseapi.back4app.com/';

export default Parse;