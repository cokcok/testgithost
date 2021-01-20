importScripts('https://www.gstatic.com/firebasejs/5.7.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.3/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '476653985053'
});

const messaging = firebase.messaging();
/* messaging.usePublicVapidKey('BIGDHEwddFF0ypuKGidQ8OS-b3LeiAMjfkK_X5ljbH_Dt7fld6uct2QblCqciBfTVyF4B33inCnhvlUiu0fCyJY'); */