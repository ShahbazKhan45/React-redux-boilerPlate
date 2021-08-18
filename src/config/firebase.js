import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';



var firebaseConfig = {
    apiKey: "AIzaSyA-_EpilrtOSieEj32dsWiuDWx1g8lOT8g",
    authDomain: "redux-chatapp.firebaseapp.com",
    projectId: "redux-chatapp",
    storageBucket: "redux-chatapp.appspot.com",
    messagingSenderId: "550810011805",
    appId: "1:550810011805:web:0d2ad7eec325b07ff9ec74",
    measurementId: "G-2PQD76SSMR"
};
// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase