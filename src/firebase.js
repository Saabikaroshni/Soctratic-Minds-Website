// Firebase v9 modular SDK
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4v11yhnlHwNFa7Pkf-ToSV8QSrY7MbP8",
  authDomain: "socratic-minds-c7630.firebaseapp.com",
  projectId: "socratic-minds-c7630",
  storageBucket: "socratic-minds-c7630.firebasestorage.app",
  messagingSenderId: "596355170278",
  appId: "1:596355170278:web:69b6f5e0fff3ea5981a027",
  measurementId: "G-VC6VCKC5BT",
};

// Init
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
