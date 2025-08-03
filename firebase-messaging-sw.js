// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.24.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.24.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA0jTDzGLMdh7UAh6VE07k2KYbV_ftQnQA",
  authDomain: "umbriox-df07e.firebaseapp.com",
  projectId: "umbriox-df07e",
  messagingSenderId: "239289752920",
  appId: "1:239289752920:web:0cef4c6d1ecaa60c3c192d",
  measurementId: "G-F10JP8XXYC"
});

const messaging = firebase.messaging();
