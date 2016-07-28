import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey        : "AIzaSyAQatOwaOna7K2WEOO3ERGJQcpMb2-naWc",
    authDomain    : "react-todoapp-9f97a.firebaseapp.com",
    databaseURL   : "https://react-todoapp-9f97a.firebaseio.com",
    storageBucket : "react-todoapp-9f97a.appspot.com",
  };
  firebase.initializeApp(config);

} catch (e) {

  // logging error if any

} finally {
  // Will execute any code by default
}



export var firebaseRef = firebase.database().ref();

export default firebase;
