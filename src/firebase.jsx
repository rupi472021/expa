import firebase from 'firebase';

const config = {

  apiKey: "AIzaSyDYb-eaZuAQ8lyXmzW4XWpDnc2Ds1Ue2qM",
  authDomain: "expa-4be49.firebaseapp.com",
  projectId: "expa-4be49",
  storageBucket: "expa-4be49.appspot.com",
  messagingSenderId: "929269921615",
  appId: "1:929269921615:web:e738c7fb68107811ce373a",
  measurementId: "G-W544KJKHGB"

  // apiKey: "AIzaSyBJpgXKA9f7sZiwHPE6j-bWl3kk1q6DTfQ",
  // authDomain: "fir-cloud-messaging-5c819.firebaseapp.com",
  // projectId: "fir-cloud-messaging-5c819",
  // storageBucket: "fir-cloud-messaging-5c819.appspot.com",
  // messagingSenderId: "907248346701",
  // appId: "1:907248346701:web:8c3af016e64c5ebf1c9e04"
}

firebase.initializeApp(config)

export default firebase;