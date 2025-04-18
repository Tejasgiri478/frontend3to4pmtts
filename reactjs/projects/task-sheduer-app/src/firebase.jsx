import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "login-register-app-fff7c.firebaseapp.com",
    projectId: "login-register-app-fff7c",
    storageBucket: "login-register-app-fff7c.firebasestorage.app",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
