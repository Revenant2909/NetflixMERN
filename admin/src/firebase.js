import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCyg00RS8cB0OXa5kFT-EmV89N_O_-zo1I",
    authDomain: "netflix-29fbc.firebaseapp.com",
    projectId: "netflix-29fbc",
    storageBucket: "netflix-29fbc.appspot.com",
    messagingSenderId: "474797631687",
    appId: "1:474797631687:web:8b5691a2be85afb4e5b6e2",
    measurementId: "G-QV21KE9XFZ"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;