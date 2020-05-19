import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAYR1VFmh47Z1cyU4ziZe-EOETDs8hLsxg",
  authDomain: "blogg-6f87a.firebaseapp.com",
  databaseURL: "https://blogg-6f87a.firebaseio.com",
  projectId: "blogg-6f87a",
  storageBucket: "blogg-6f87a.appspot.com",
  messagingSenderId: "335173087880",
  appId: "1:335173087880:web:1c595abca91ec1124b253d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export default firebase;
