import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBJpgXKA9f7sZiwHPE6j-bWl3kk1q6DTfQ",
  authDomain: "fir-cloud-messaging-5c819.firebaseapp.com",
  projectId: "fir-cloud-messaging-5c819",
  storageBucket: "fir-cloud-messaging-5c819.appspot.com",
  messagingSenderId: "907248346701",
  appId: "1:907248346701:web:8c3af016e64c5ebf1c9e04"
}

firebase.initializeApp(config);
const messaging = firebase.messaging();

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });

export default firebase;