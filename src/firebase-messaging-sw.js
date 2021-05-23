importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

import firebase from './firebase';

firebase.initializeApp({
  messagingSenderId: "929269921615",
})

const initMessaging = firebase.messaging();


