import Firebase from "firebase";

if (!Firebase.apps.length) {
  Firebase.initializeApp({
 apiKey: "AIzaSyBALwdIcHhfbo9HuG7sG0fBv_fXeVGnYNk",
    authDomain: "samplesvuemusic.firebaseapp.com",
    databaseURL: "https://samplesvuemusic.firebaseio.com",
    projectId: "samplesvuemusic",
    storageBucket: "samplesvuemusic.appspot.com",
    messagingSenderId: "233458901134",
    appId: "1:233458901134:web:295ace485ae20383"
  });
}

export const db = Firebase.firestore();
