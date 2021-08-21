import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBCvadZmNz-iFhjnNu6PvZySVpsqIXWFPw",
    authDomain: "chatapp-67f51.firebaseapp.com",
    projectId: "chatapp-67f51",
    storageBucket: "chatapp-67f51.appspot.com",
    messagingSenderId: "65957611780",
    appId: "1:65957611780:web:ada627978c231eb9f7a851",
    measurementId: "G-0KL10X2VNN"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db , auth}