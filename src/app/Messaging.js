/* eslint-disable */
import * as firebase from 'firebase/app';
import 'firebase/messaging';

const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmqZMB5H0mLC2Jcgs1D2qrMgWd6hCj_bQ",
  authDomain: "kihon-24459.firebaseapp.com",
  databaseURL: "https://kihon-24459.firebaseio.com",
  projectId: "kihon-24459",
  storageBucket: "kihon-24459.appspot.com",
  messagingSenderId: "431963400045",
  appId: "1:431963400045:web:e67e7d049bed3485f45c64"
});

const messaging = initializedFirebaseApp.messaging();

messaging.onMessage((payload) => {
  console.log('Message received. ', payload);

  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    const notification = new Notification(payload.notification.title, { body: payload.notification.body });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        const notification = new Notification(payload.notification.title, { body: payload.notification.body });
      }
    });
  }
});

export { messaging };
