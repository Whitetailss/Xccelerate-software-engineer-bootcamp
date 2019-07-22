import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app’s Firebase configuration
var firebaseConfig = {
     apiKey: "AIzaSyBKFkqk9Yz5_iXGPSjUlamPqn6RWyOIVlk",
     authDomain: "kindergarten-337d1.firebaseapp.com",
     databaseURL: "https://kindergarten-337d1.firebaseio.com",
     projectId: "kindergarten-337d1",
     storageBucket: "kindergarten-337d1.appspot.com",
     messagingSenderId: "811240049164",
     appId: "1:811240049164:web:95dd1fdd3b03c783"
};
 
// var firebaseConfig = {
//     apiKey: "AIzaSyBjNokz78ExnKr0BwfxIpzSTgECxLYTnHc",
//     authDomain: "netninja-80c22.firebaseapp.com",
//     databaseURL: "https://netninja-80c22.firebaseio.com",
//     projectId: "netninja-80c22",
//     storageBucket: "netninja-80c22.appspot.com",
//     messagingSenderId: "1059489511632",
//     appId: "1:1059489511632:web:c74cf4baa5c07b60"
//   };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }

 /*+++++++++++++++++++++Firebase JS SDK  ++++++++++++++++++++++++++++
<!--The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js"></script>

 <!--TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
