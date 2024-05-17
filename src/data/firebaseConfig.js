// firebaseConfig.js
import firebase from 'firebase/app';
//import 'firebase/database'; // Si estás utilizando Firebase Realtime Database
import 'firebase/firestore'; // Si estás utilizando Firestore

const firebaseConfig = {
    apiKey: "AIzaSyDrs5x-hyfovpGIUFRRijdgxca9u3Oh2F4",
    authDomain: "waterfront-55bb3.firebaseapp.com",
    projectId: "waterfront-55bb3",
    storageBucket: "waterfront-55bb3.appspot.com",
    messagingSenderId: "993105817110",
    appId: "1:993105817110:web:915ab95198883960888f37"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

