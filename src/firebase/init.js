  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC5q5AkIyF9qyOSsGLGnTgx4JM-HJECsjU",
    authDomain: "ninja-chat-77ab3.firebaseapp.com",
    databaseURL: "https://ninja-chat-77ab3.firebaseio.com",
    projectId: "ninja-chat-77ab3",
    storageBucket: "ninja-chat-77ab3.appspot.com",
    messagingSenderId: "367090526976"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()
