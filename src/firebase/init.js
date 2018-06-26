  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAqzIWakGNMv9Qpx4-XJLD_g0UylQ0iCf0",
    authDomain: "lobochat-app.firebaseapp.com",
    databaseURL: "https://lobochat-app.firebaseio.com",
    projectId: "lobochat-app",
    storageBucket: "lobochat-app.appspot.com",
    messagingSenderId: "1066676069084"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
