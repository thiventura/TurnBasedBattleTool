import firebase from 'firebase'

var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com"
};

var fire = firebase.initializeApp(config);
export default fire;
