/* eslint-disable */
import * as firebase from 'firebase/app';
import 'firebase/messaging';

const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: '431963400045',
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
