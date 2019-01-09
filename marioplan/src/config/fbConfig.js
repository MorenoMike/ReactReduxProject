import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBBzwrYzFJMnhuffke-lMrG8pG6IfbOQLI",
    authDomain: "ninja-marioplan-b008a.firebaseapp.com",
    databaseURL: "https://ninja-marioplan-b008a.firebaseio.com",
    projectId: "ninja-marioplan-b008a",
    storageBucket: "ninja-marioplan-b008a.appspot.com",
    messagingSenderId: "192091856305"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;