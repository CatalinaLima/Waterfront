// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDrs5x-hyfovpGIUFRRijdgxca9u3Oh2F4",
    authDomain: "waterfront-55bb3.firebaseapp.com",
    projectId: "waterfront-55bb3",
    storageBucket: "waterfront-55bb3.appspot.com",
    messagingSenderId: "993105817110",
    appId: "1:993105817110:web:915ab95198883960888f37"
  };



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };


