import firebase from "firebase/app";
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeVaxK5q3YwZE_LeHOPkMNEN1naK_JtHQ",
  authDomain: "fitnessapp-af1d6.firebaseapp.com",
  projectId: "fitnessapp-af1d6",
  storageBucket: "fitnessapp-af1d6.appspot.com",
  messagingSenderId: "827306839051",
  appId: "1:827306839051:web:368c14b1ab5b59c4dd4b0e",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
