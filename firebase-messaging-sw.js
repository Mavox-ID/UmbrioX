importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA0jTDzGLMdh7UAh6VE07k2KYbV_ftQnQA",
  authDomain: "umbriox-df07e.firebaseapp.com",
  projectId: "umbriox-df07e",
  messagingSenderId: "239289752920",
  appId: "1:239289752920:web:0cef4c6d1ecaa60c3c192d",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Получено фоновое сообщение ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/ico.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
