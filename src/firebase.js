import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzA65kPpVTLb0-ab1HGK5d1Y0R012LKGI",
    authDomain: "tinder-clone-2881d.firebaseapp.com",
    databaseURL: "https://tinder-clone-2881d.firebaseio.com",
    projectId: "tinder-clone-2881d",
    storageBucket: "tinder-clone-2881d.appspot.com",
    messagingSenderId: "845253854375",
    appId: "1:845253854375:web:e3018b506aa7f8d7f18782",
    measurementId: "G-K46Q07H64S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;

  