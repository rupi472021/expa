// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyDYb-eaZuAQ8lyXmzW4XWpDnc2Ds1Ue2qM",
  authDomain: "expa-4be49.firebaseapp.com",
  projectId: "expa-4be49",
  storageBucket: "expa-4be49.appspot.com",
  messagingSenderId: "929269921615",
  appId: "1:929269921615:web:e738c7fb68107811ce373a",
  measurementId: "G-W544KJKHGB"
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