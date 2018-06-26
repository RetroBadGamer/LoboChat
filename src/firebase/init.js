  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDdVuH2idlgxyu-lY2KYbJXTmKFoDzRgt0",
    authDomain: "lobochat-stg.firebaseapp.com",
    databaseURL: "https://lobochat-stg.firebaseio.com",
    projectId: "lobochat-stg",
    storageBucket: "lobochat-stg.appspot.com",
    messagingSenderId: "502592929802"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
