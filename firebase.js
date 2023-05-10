import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyBfCAkwQqDXQcDEvE6BBR8yfe2ywQ1u4-o",
  authDomain: "instagram-react-native-12b59.firebaseapp.com",
  projectId: "instagram-react-native-12b59",
  storageBucket: "instagram-react-native-12b59.appspot.com",
  messagingSenderId: "783372801599",
  appId: "1:783372801599:web:1c1349aabe5a252ccb8a8a",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
