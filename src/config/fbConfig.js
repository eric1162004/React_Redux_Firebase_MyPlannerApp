 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBKdyXx3hlzXVHK4QcBBunqsUFxe-BAq5s",
    authDomain: "my-planner-7e87a.firebaseapp.com",
    databaseURL: "https://my-planner-7e87a.firebaseio.com",
    projectId: "my-planner-7e87a",
    storageBucket: "my-planner-7e87a.appspot.com",
    messagingSenderId: "508579461820",
    appId: "1:508579461820:web:f15d9163b0247b8d5daeb9",
    measurementId: "G-QFV726RB7C",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // initialize Firestore
  firebase.firestore();

  // firebase.firestore().settings({ timestampsInSnapshots:true });

  export default firebase; 