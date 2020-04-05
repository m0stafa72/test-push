importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
var firebaseConfig = {
    apiKey: "AIzaSyAPMK-dMObjWvzyMvndAmH-a7lBfZ33G88",
    authDomain: "react-app-bf60c.firebaseapp.com",
    databaseURL: "https://react-app-bf60c.firebaseio.com",
    projectId: "react-app-bf60c",
    storageBucket: "react-app-bf60c.appspot.com",
    messagingSenderId: "947122584787",
    appId: "1:947122584787:web:63dd9bbb85f3b83495e826"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("my notification title");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function(event) {
    // do what you want
    // ...
});