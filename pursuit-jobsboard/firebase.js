import firebase from 'firebase/app';
import 'firebase/auth';

const { //destructuring imported .env keys
    APIKEY,
    AUTHDOMAIN,
    DATABASEURL,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERID,
    APPID,
    MEASUREMENTID
} = process.env;

const firebaseConfig = { //setting env config object
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);

export default firebase