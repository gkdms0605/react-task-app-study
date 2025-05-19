// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSK-2KfgNoxsZ_5Pe_ZQubd8WEdAz2yPU",
  authDomain: "react-task-app-924c8.firebaseapp.com",
  projectId: "react-task-app-924c8",
  storageBucket: "react-task-app-924c8.firebasestorage.app",
  messagingSenderId: "483076318015",
  appId: "1:483076318015:web:074a5acf7619a8a543a98a",
  measurementId: "G-XND697EEB8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
