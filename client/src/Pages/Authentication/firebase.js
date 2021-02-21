import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyCG9SwvDM4-d4hNVpVW9LnURj-GaZJY6Y4",
    authDomain: "onlinedoct-90f67.firebaseapp.com",
    databaseURL: "https://onlinedoct-90f67-default-rtdb.firebaseio.com",
    projectId: "onlinedoct-90f67",
    storageBucket: "onlinedoct-90f67.appspot.com",
    messagingSenderId: "70895263096",
    appId: "1:70895263096:web:18236084c8e0227b48fc8d",
    measurementId: "G-YRLT9M4VQW"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig;