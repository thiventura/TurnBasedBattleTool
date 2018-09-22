import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAlY_56t_XqgLDifJYKj2Njjc5i7h499Og",
    authDomain: "pokechess-65165.firebaseapp.com",
    databaseURL: "https://pokechess-65165.firebaseio.com",
    projectId: "pokechess-65165",
    storageBucket: "pokechess-65165.appspot.com",
    messagingSenderId: "235711954399"
};

var fire = firebase.initializeApp(config);
export default fire;
