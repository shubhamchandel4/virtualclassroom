import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXxWpTpro3gOx7AhKNPnDQTyVUWEdSb7I",
    authDomain: "virtualclassroom-97c60.firebaseapp.com",
    projectId: "virtualclassroom-97c60",
    storageBucket: "virtualclassroom-97c60.appspot.com",
    messagingSenderId: "210978932672",
    appId: "1:210978932672:web:3c3dc0d6abbbbbc9736a25"
  };

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;