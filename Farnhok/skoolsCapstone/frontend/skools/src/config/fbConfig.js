import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'


var Config = {
    apiKey: "AIzaSyDhjpeaC_ewV-Fe2NXVLRv9ck0rZQLy7X8",
    authDomain: "capstone-project-83c20.firebaseapp.com",
    databaseURL: "https://capstone-project-83c20.firebaseio.com",
    projectId: "capstone-project-83c20",
    storageBucket: "capstone-project-83c20.appspot.com",
    messagingSenderId: "522501406704",
    appId: "1:522501406704:web:a22490a79814a74d"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  var storage = firebase.storage();

  export default firebase;