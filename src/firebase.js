import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBShgfyIweYtXsnw_WqA9qfVmtQxcHFUdU",
  authDomain: "mtg-sessions-companion.firebaseapp.com",
  projectId: "mtg-sessions-companion",
  storageBucket: "mtg-sessions-companion.firebasestorage.app",
  messagingSenderId: "562766672090",
  appId: "1:562766672090:web:57276b79c954d7864df5e3",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
