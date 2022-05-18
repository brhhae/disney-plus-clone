import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCiv_wYPcWcEQc86sej2uayquEss6gW30E",
    authDomain: "movies-e4050.firebaseapp.com",
    databaseURL: "https://movies-e4050-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "movies-e4050",
    storageBucket: "movies-e4050.appspot.com",
    messagingSenderId: "377975318693",
    appId: "1:377975318693:web:947076a572714de13bc54c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
