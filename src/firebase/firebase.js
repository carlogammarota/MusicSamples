import Firebase from "firebase";

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: "AIzaSyCHB01JYnzwEUZ5yCFCOnSmhsXPbuChpBM",
    authDomain: "codesandbox-1168d.firebaseapp.com",
    databaseURL: "https://codesandbox-1168d.firebaseio.com",
    projectId: "codesandbox-1168d",
    storageBucket: "codesandbox-1168d.appspot.com",
    messagingSenderId: "111482385632",
    appId: "1:111482385632:web:7fe181b0113afc7b"
  });
}

export const db = Firebase.firestore();
