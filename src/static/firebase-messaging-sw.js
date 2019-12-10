importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-messaging.js');

firebase.initializeApp({
  'apiKey': "AIzaSyBmqZMB5H0mLC2Jcgs1D2qrMgWd6hCj_bQ",
  'authDomain': "kihon-24459.firebaseapp.com",
  'databaseURL': "https://kihon-24459.firebaseio.com",
  'projectId': "kihon-24459",
  'storageBucket': "kihon-24459.appspot.com",
  'messagingSenderId': "431963400045",
  'appId': "1:431963400045:web:e67e7d049bed3485f45c64"
});

const messaging = firebase.messaging();