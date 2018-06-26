  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDg6jDOij9lrpWwahDvsD7gOy5mqmFxjQ8",
    authDomain: "lobochat-test.firebaseapp.com",
    databaseURL: "https://lobochat-test.firebaseio.com",
    projectId: "lobochat-test",
    storageBucket: "lobochat-test.appspot.com",
    messagingSenderId: "989954825530"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
