import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsj9YBRgf89VoxIhY7De96ewepYPo2xh0",
    authDomain: "facebook-messenger-clone-3a49b.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-3a49b.firebaseio.com",
    projectId: "facebook-messenger-clone-3a49b",
    storageBucket: "facebook-messenger-clone-3a49b.appspot.com",
    messagingSenderId: "553561755506",
    appId: "1:553561755506:web:1fe1160fef0d12212e57eb",
    measurementId: "G-K8317X7RET"
});

const db = firebaseApp.firestore();

export default db;

