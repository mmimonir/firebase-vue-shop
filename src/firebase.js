import firebase from "firebase";
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAR_uWnkF-BqxSK0nRku2md-faOyJofRNY",
  authDomain: "vue-shop-e76c2.firebaseapp.com",
  databaseURL: "https://vue-shop-e76c2.firebaseio.com",
  projectId: "vue-shop-e76c2",
  storageBucket: "",
  messagingSenderId: "1042055050420",
  appId: "1:1042055050420:web:f2789dced55ba9706053e1"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { fb, db };
