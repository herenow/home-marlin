import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBVUzjZOmHY2qyKKGXXPwGrk3Xdd-cxYQU",
    authDomain: "projeto-teste-645a7.firebaseapp.com",
    databaseURL: "https://projeto-teste-645a7.firebaseio.com",
    projectId: "projeto-teste-645a7",
    storageBucket: "projeto-teste-645a7.appspot.com",
    messagingSenderId: "694286537437",
    appId: "1:694286537437:web:4c618c32681765dd14c134",
    measurementId: "G-ENFVMN4VTY"
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseAnalytics = firebase.analytics();
