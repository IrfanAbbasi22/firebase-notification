// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  // Add your key here
    apiKey: "AI********************************",
    authDomain: "laravel-push-notificatio-f64bc.firebaseapp.com",
    databaseURL: 'https://project-id.firebaseio.com',
    projectId: "laravel-push-notificatio-f64bc",
    storageBucket: "laravel-push-notificatio-f64bc.appspot.com",
    messagingSenderId: "619998597331",
    appId: "1:619998597331:web:bbaabd8fca4c1d9cb00426",
    measurementId: "G-T0XQD3HBTW"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
let song = '/bell-notification.mp3';
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );


    // Customize notification here
    // const notificationTitle = payload.notification.title;
    // const notificationOptions = {
    //   body: 'sdsdfsdfsdfdsfsdf',
    //   icon: payload.notification.image,
    // };
  
    // playAudio();
    // notifyMe();
    // new Audio(song).play();
    // self.registration.showNotification(notificationTitle, notificationOptions);
  });