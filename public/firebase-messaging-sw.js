// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyBJpgXKA9f7sZiwHPE6j-bWl3kk1q6DTfQ",
  authDomain: "fir-cloud-messaging-5c819.firebaseapp.com",
  projectId: "fir-cloud-messaging-5c819",
  storageBucket: "fir-cloud-messaging-5c819.appspot.com",
  messagingSenderId: "907248346701",
  appId: "1:907248346701:web:8c3af016e64c5ebf1c9e04"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});