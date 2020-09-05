import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBt-qqZDwpX5SPuqHpSz69Mc1Mm7ZSr2EU",
    authDomain: "instagram-clone-ad82a.firebaseapp.com",
    databaseURL: "https://instagram-clone-ad82a.firebaseio.com",
    projectId: "instagram-clone-ad82a",
    storageBucket: "instagram-clone-ad82a.appspot.com",
    messagingSenderId: "1067514863382",
    appId: "1:1067514863382:web:20cf6a9d9d6200891dfa37",
    measurementId: "G-V5T8G034SD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }; 